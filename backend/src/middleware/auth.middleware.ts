import { NextFunction, Request, Response } from "express"
import { CatchError, TryError } from "../util/errors"
import jwt, { JwtPayload } from "jsonwebtoken"
import mongoose from "mongoose"

export interface tokenInterface {
    id: mongoose.Types.ObjectId
    fullname: string
    email: string
    mobile: string
}
export interface SessionInterface extends Request {
    session?: tokenInterface
}
const AuthMiddleware = async (req: SessionInterface, res: Response, next: NextFunction) => {
    try {

        const accessToken = req.cookies.accessToken
        if (!accessToken)
            throw TryError("Unauthorized request!", 401)
        const payload = await jwt.verify(accessToken, process.env.AUTH_SECRET!) as JwtPayload
        req.session = {
            fullname: payload.fullname,
            email: payload.email,
            mobile: payload.mobile,
            id: payload.id
        }
        next()
    } catch (error) {
        CatchError(error, res, "Unauthorized request")
    }


}

export default AuthMiddleware