import { Schema, model } from 'mongoose'
import type { User } from 'app/resources/types'

const UserSchema = new Schema<User>({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    username: String,
    phone: Number
})

export const UserModel = model('users', UserSchema)
