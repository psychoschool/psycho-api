import { Schema, model } from 'mongoose'
import type { User, UserResponse } from 'app/resources/types'

const UserSchema = new Schema<User>({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    username: String,
    phone: Number
})

export const UserModel = model('users', UserSchema)

export const normalizeUser = (user: User): UserResponse => ({
    id: user.id,
    phone: user.phone,
    email: user.email,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName
})
