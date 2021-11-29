import { Schema, model } from 'mongoose'
import type { User, UserResponse } from 'app/resources/types'

const UserSchema = new Schema<User>({
    firstName: String,
    email: String,
    password: String,
    phone: Number
})

export const UserModel = model('users', UserSchema)

export const normalizeUser = (user: User): UserResponse => ({
    id: user.id,
    phone: user.phone,
    email: user.email,
    firstName: user.firstName
})
