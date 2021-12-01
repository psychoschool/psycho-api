import { Request, Response, NextFunction } from 'express'
import { AppError } from 'app/errors'
import { getDebugger } from 'src/utils'

const DEBUG = getDebugger('error.middleware')
export const error = (error: Error, req: Request, res: Response, _: NextFunction) => {
    req.logger = () => {
        DEBUG('Error: %o', error)
    }

    if (error instanceof AppError) {
        return res.status(error.statusCode).send(error.serializeError())
    }

    res.status(400).send('Something broke!')
}
