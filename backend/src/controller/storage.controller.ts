import { Request, Response } from "express"
import { CatchError, TryError } from "../util/errors"
import {  DownloadObject, isFileExist, UploadObject } from "../util/s3"

export const downloadFile = async (req: Request, res: Response) => {
    try {
        const path = req?.body?.path
        if (!path || path === undefined)
            throw TryError("Path is missing", 400)

        const checkFileExist = await isFileExist(path)
        if (!checkFileExist)
            throw TryError("File doesn't exists!", 404)
        const url = await DownloadObject(path)
        res.json({ url })

    } catch (error) {
        CatchError(error, res, "Failed to generate download url")
    }
}

export const uploadFile = async (req: Request, res: Response) => {
    try {
        const path = req.body?.path
        const type = req.body?.type

        if (!path || !type)
            throw TryError("Invalid request", 400)

        const url = await UploadObject(path, type)
        res.json({ url })
    } catch (error) {
        CatchError(error, res, "Failed to generate upload url")
    }
}