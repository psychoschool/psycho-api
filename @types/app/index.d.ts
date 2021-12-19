import type { Request as ExpressRequest, Response as ExpressResponse } from 'express'
import { UserRole } from 'app/resources/types'

interface Locals {
    user: {
        sub: string
        email: string
        role: UserRole
    }
}

declare module 'express' {
    export interface Request extends ExpressRequest {
        logger: () => void
    }

    export interface Response extends ExpressResponse {
        locals: Locals
    }
}
