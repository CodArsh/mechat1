import { Request, Response } from "express"
import AuthModel from "../model/auth.model"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import { CatchError, TryError } from "../util/errors"
import { SessionInterface, tokenInterface } from "../middleware/auth.middleware"
import { DownloadObject } from "../util/s3"
import { v4 as uuid } from "uuid"
import moment from "moment"

const accessTokenExpiry = '10m'
type TokenType = "at" | "rt"

const generateToken = (payload: tokenInterface) => {
    const accessToken = jwt.sign(payload, process.env.AUTH_SECRET!, { expiresIn: accessTokenExpiry })
    const refreshToken = uuid()
    return { accessToken, refreshToken }
}

const getOptions = (tokenType: TokenType) => {
    return {
        httpOnly: true,
        maxAge: tokenType === 'at' ? (10 * 60) * 1000 : (7 * 24 * 60 * 60) * 1000,
        // explaination:- maxAge: tokenType === 'at'  ? 10min : 7 days
        secure: true,
        domain: 'localhost'
    }
}
export const signup = async (req: Request, res: Response) => {
    try {
        await AuthModel.create(req.body)
        res.json({ message: "User created cussessfully" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const user = await AuthModel.findOne({ email })
        if (!user)
            throw TryError("User not found!", 404)
        else {
            const isLogin = await bcrypt.compare(password, user.password)
            if (!isLogin)
                throw TryError("Invalid Credentials", 401)

            const payload = {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
                mobile: user.mobile,
            }

            const { accessToken, refreshToken } = generateToken(payload)
            await AuthModel.updateOne({ _id: user._id }, {
                $set: {
                    refreshToken,
                    expiry: moment().add(7, "days").toDate()
                }
            })
            res.cookie("accessToken", accessToken, getOptions('at'))
            res.cookie("refreshToken", refreshToken, getOptions('rt'))
            res.json({ message: "Login Successfull" })
        }
    } catch (error: unknown) {
        CatchError(error, res, "Login failed!")
    }
}

export const getSession = async (req: Request, res: Response) => {
    try {
        const accessToken = req.cookies.accessToken
        if (!accessToken)
            throw TryError("Invalid session!", 401)
        const session = await jwt.verify(accessToken, process.env.AUTH_SECRET!)
        res.json(session)
    } catch (error: unknown) {
        CatchError(error, res, "Invalid session!")
    }
}

export const updateProfilePicture = async (req: SessionInterface, res: Response) => {
    try {

        console.log('object1')
        const path = req.body.path
        console.log("`", path)
        if (!path || !req.session)
            throw TryError("Failed to update profile picture", 400)

        console.log('object2')
        await AuthModel.updateOne({ _id: req.session.id }, { $set: { image: path } })
        const url = await DownloadObject(path)
        console.log('object3')
        res.json({ image: url })
    } catch (error: unknown) {
        CatchError(error, res, "Failed to update profile picture")
    }
}

export const refreshToken = async (req: SessionInterface, res: Response)=>{
    try {
        if(!req.session)
            throw TryError("Failed to refresh token", 401)
        const {accessToken, refreshToken} = generateToken(req.session)

        await AuthModel.updateOne({_id: req.session.id}, {$set: {
            refreshToken,
            expiry: moment().add(7, 'days').toDate()
        }})

        res.cookie("accessToken", accessToken, getOptions('at'))
        res.cookie("refreshToken", refreshToken, getOptions('rt'))
        res.json({message: 'Token refreshed'})
    }
    catch(err)
    {
        CatchError(err, res, "Failed to refresh token")
    }
}

export const logout = async (req: Request, res: Response)=>{
    try {
        const options = {
            httpOnly: true,
            maxAge: 0,
            secure: false,
            domain: 'localhost'
        }

        res.clearCookie("accessToken", options)
        res.clearCookie("refreshToken", options)
        res.json({message: "Logout success"})
    }
    catch(err)
    {
        CatchError(err, res, "Failed to update profile picture")
    }
}