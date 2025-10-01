import { Request, Response } from "express"
import AuthModel from "../model/auth.model"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import { CatchError, TryError } from "../util/errors"
import { tokenInterface } from "../middleware/auth.middleware"

const accessTokenExpiry = '10m'


const generateToken = (payload: tokenInterface) => {
    return jwt.sign(payload, process.env.AUTH_SECRET!, { expiresIn: accessTokenExpiry })
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
            const accesstoken = generateToken(payload)
            const options = {
                httpOnly: true,
                maxAge: (10 * 60) * 1000,
                secure: true,
                domain: 'localhost'
            }
            console.log(email, password)
            res.cookie("accessToken", accesstoken, options)
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