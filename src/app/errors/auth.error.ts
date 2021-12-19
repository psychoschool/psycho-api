import { AppError } from './app.error'

export class AuthError extends AppError {
    statusCode = 401

    constructor(public message: string) {
        super('Auth error')
    }

    serializeError = () => [{ message: this.message }]
}
