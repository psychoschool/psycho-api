import { Schema, model } from 'mongoose'
import type { User } from 'app/resources/types'

const UserSchema = new Schema<User>({
    firstName: String,
    email: String,
    password: String,
    role: String,
    phone: Number
})

export const UserModel = model('users', UserSchema)
