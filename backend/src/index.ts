import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
mongoose.connect(process.env.DB!).then(() => console.log('Database connected'))
  .catch(() => console.log('Database not connected'))

import express from 'express'
import cors from 'cors'
import AuthRouter from "./router/auth.router"
import cookieParser from 'cookie-parser'
import StorageRouter from './router/storage.router'

const app = express()
app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on ${process.env.PORT}`)
})

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true, // allow cookies
}))

app.use("/auth", AuthRouter)
app.use("/storage", StorageRouter)