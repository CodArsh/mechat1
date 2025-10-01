import { GetObjectCommand, HeadObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const connection = new S3Client({
    region: process.env.REGION,
    endpoint: `https://s3-${process.env.REGION}.amazonaws.com`,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
    }
})

const isFileExist = async (path: string) => {
    try {
        const command = new HeadObjectCommand({
            Bucket: process.env.S3_NETWORK,
            Key: path
        })
        await connection.send(command)
        return true
    } catch (error) {
        return false
    }
}

const DownloadObject = async (path: string, expiry: number = 60) => {
    const option = {
        Bucket: process.env.S3_NETWORK,
        Key: path
    }
    const command = new GetObjectCommand(option)
    const url = await getSignedUrl(connection, command, { expiresIn: expiry })

    return url
}

const UploadObject = async (path: string, type: string) => {
    const command = new PutObjectCommand({
        Bucket: process.env.S3_NETWORK,
        Key: path,
        ContentType: type
    })

    const url = await getSignedUrl(connection, command, { expiresIn: 60 })
    return url
}

export {
    connection,
    DownloadObject,
    UploadObject,
    isFileExist
}