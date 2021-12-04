import { AppError } from './app.error'

export class RequestError extends AppError {
    statusCode = 400

    constructor(public message: string) {
        super(message)
    }

    serializeError = () => [{ message: this.message }]
}
