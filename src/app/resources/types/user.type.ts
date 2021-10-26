import { Document } from 'mongoose'

export type UserRequest = Omit<User, 'id'> & { password: string }
export type UserResponse = Omit<User, 'password'> & { password: string }

export interface User extends Partial<Document> {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: number
    password: string
    username: string
}
