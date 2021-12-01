import { AppError } from './app.error'

export class DatabaseError extends AppError {
    statusCode = 500
    reason = 'Error connecting to DB'

    constructor() {
        super('Error connecting to DB')
    }

    serializeError() {
        return [{ message: this.reason }]
    }
}
