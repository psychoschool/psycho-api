import { Document } from 'mongoose'

export type UserRequest = Omit<User, 'id'>
export type UserResponse = Omit<User, 'password'>
export type UserRole = 'admin' | 'tutor' | 'student'

export interface User extends Partial<Document> {
    id: string
    firstName: string
    email: string
    phone: number
    password: string
    role: UserRole
}
