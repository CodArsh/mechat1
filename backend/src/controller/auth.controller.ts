import { Request, Response } from "express"
import AuthModel from "../model/auth.model"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

const accessTokenExpiry = '10m'
interface tokenInterface {
    id: mongoose.Types.ObjectId
    fullname: string
    email: string
    mobile: string
}

interface ErrorMessage extends Error {
    status?: number
}

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
        if (!user) {
            const err: ErrorMessage = new Error("User not found!")
            err.status = 404
            throw err
        }

        const isLogin = await bcrypt.compare(password, user.password)
        if (!isLogin) {
            const err: ErrorMessage = new Error("Invalid Credentials")
            err.status = 401
            throw err
        }

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
        res.cookie("accessToken", accesstoken, options)
        res.json({ message: "Login Successfull" })
    } catch (error: unknown) {
        if (error instanceof Error) {
            const status = (error as ErrorMessage).status || 500
            res.status(status).json({ message: error.message })
        }
    }
}