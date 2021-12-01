export abstract class AppError extends Error {
    protected constructor(message: string) {
        super(message)
    }
    abstract statusCode: number

    abstract serializeError(): Array<{ message: string }>
}
