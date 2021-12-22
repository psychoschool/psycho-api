import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import * as userResource from 'app/resources/api'
import { getEnvVars } from 'src/utils'

export const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt as string
    const { sub } = await jwt.verify(token, getEnvVars('SECRET_TOKEN'))

    userResource
        .fetchUserById(sub as string)
        .then(user => res.json({ data: user }))
        .catch(next)
}
