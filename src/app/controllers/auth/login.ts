import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { getDebugger, getEnvVars } from 'src/utils'
import { createJWTToken } from 'app/resources/api'

const DEBUG = getDebugger('auth.controller')
export const signIn = async (req: Request, res: Response) => {
    const { username } = req.body
    const access_token = jwt.sign({ username }, getEnvVars('SECRET_TOKEN'), { expiresIn: '365 days' })

    await createJWTToken(access_token)
    DEBUG('jwtToken: %s', access_token)

    res.cookie('jwt', access_token, { httpOnly: true, maxAge: 3600 * 1000 * 24 * 365 })
    res.json({ access_token })
}
