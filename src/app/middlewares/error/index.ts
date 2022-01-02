import { Request, Response, NextFunction } from 'express'
import { AppError } from 'app/errors'

export const error = (error: Error, req: Request, res: Response, _: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            errors: error.serializeError()
        })
    }

    res.status(400).json([{ message: 'Something broke!' }])
}
