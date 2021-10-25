import { Schema, model } from 'mongoose'
import type { User } from 'app/resources/types'

const UserSchema = new Schema<User>({
    name: String,
    email: String,
    phone: Number
})

export const UserModel = model('users', UserSchema)
