import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { getDebugger, getEnvVars } from 'src/utils'
import { createJWTToken, createUser } from 'app/resources/api'
import type { UserRequest } from 'app/resources/types'

const DEBUG = getDebugger('auth.controller')
export const signUp = async (req: Request, res: Response) => {
    const { username, phone, email, firstName, lastName, password } = req.body as UserRequest
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await createUser({ username, phone, email, firstName, lastName, password: hashedPassword })

    const access_token = jwt.sign({ username, sub: user.id }, getEnvVars('SECRET_TOKEN'), { expiresIn: '365 days' })
    await createJWTToken(access_token)

    DEBUG('user: %o', user)
    res.cookie('jwt', access_token, { httpOnly: true, maxAge: 3600 * 1000 * 24 * 365 })
    res.json({ id: user.id })
}
