import { AppError } from './app.error'

export class ValidationError extends AppError {
    statusCode = 400

    constructor(public message: string, public data: unknown) {
        super('Validation error')
    }

    serializeError = () => [{ message: this.message }]
}
