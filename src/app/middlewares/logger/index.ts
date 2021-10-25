import { Request, Response, NextFunction } from 'express'
import { getDebugger } from 'src/utils'

const DEBUG = getDebugger('logger.middleware')
export const logger = (req: Request, res: Response, next: NextFunction) => {
    req.logger = () => {
        DEBUG('request: %o', req)
    }

    next()
}
