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
            throw new Error("User not found!")

        const isLogin = await bcrypt.compare(password, user.password)
        if (!isLogin)
            throw new Error("Invalid Crediantial")

        const payload = {
            id: user._id,
            fullname: user.fullname,
            email: user.email,
            mobile: user.mobile,
        }
        const accesstoken = generateToken(payload)
        const options = {
            httpOnly: true,
            maxAge: (10 * 60)
        }
        res.cookie("accessToken", accesstoken, options)
        res.json({ message: "Welcome" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}