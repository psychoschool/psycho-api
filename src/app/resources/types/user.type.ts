import { Document } from 'mongoose'

export type UserRequest = Omit<User, 'id'> & { password: string }
export type UserResponse = Omit<User, 'password'>

export interface User extends Partial<Document> {
    id: string
    firstName: string
    email: string
    phone: number
    password: string
}
