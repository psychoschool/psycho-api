import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { getDebugger, getEnvVars } from 'src/utils'
import { findToken } from 'app/resources/api'
import { JWTPayload } from 'app/resources/types'

const DEBUG = getDebugger('auth.middleware')
export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt as string
    const isValidToken = await findToken(token)

    if (!token || !isValidToken) return res.sendStatus(401)

    jwt.verify(token, getEnvVars('SECRET_TOKEN'), (err, user) => {
        if (err) return res.sendStatus(403)
        res.locals.user = user as JWTPayload

        DEBUG('user %o', user)
        next()
    })
}
