import { Schema, model } from 'mongoose'
import type { User } from 'app/resources/types'

const UserSchema = new Schema<User>({
    firstName: String,
    email: { type: String, required: [true, 'email is required'] },
    password: { type: String, required: [true, 'password is required'] },
    role: { type: String, default: 'student' },
    phone: { type: Number, required: [true, 'phone is required'] }
})

export const UserModel = model('users', UserSchema)
