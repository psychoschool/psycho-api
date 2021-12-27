import { Model, Document } from 'mongoose'

export type UserRequest = Omit<User, 'id'>
export type UserResponse = Pick<User, 'id' | 'firstName' | 'email' | 'phone' | 'role'>
export type UserRole = 'admin' | 'tutor' | 'student'

export interface User extends Document {
    id: string
    firstName: string
    email: string
    phone: number
    password: string
    role: UserRole
}

export interface UserModal extends Model<User> {
    build: (params: UserRequest) => User
}
