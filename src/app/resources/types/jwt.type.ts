import { UserRole } from 'app/resources/types'

export interface JWT {
    token: string
    sub: string
}

export interface JWTPayload {
    sub: string
    email: string
    role: UserRole
}
