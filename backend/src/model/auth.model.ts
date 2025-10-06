import { model, Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import moment from 'moment'
// import { v4 as uuidv4 } from 'uuid';

const authSchema = new Schema({
    image: {
        type: String,
        default: null
    },
    fullname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    refreshToken: {
        type: String
    },
    expiry: {
        type: Date
    }
}, { timestamps: true })

authSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password.toString(), 12)
    next()
})
authSchema.pre('save', function (next) {
    // this.refreshToken = uuidv4()
    this.expiry = moment().add(7, "days").toDate()
    next()
})
const AuthModel = model('Auth', authSchema)
export default AuthModel