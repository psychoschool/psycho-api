import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { getDebugger, getEnvVars } from 'src/utils'
import { createJWTToken, fetchUserByUsername } from 'app/resources/api'
import { UserRequest } from 'app/resources/types'

const DEBUG = getDebugger('auth.controller')
export const signIn = async (req: Request, res: Response) => {
    const { username, password } = req.body as UserRequest
    const user = await fetchUserByUsername(username)
    const isValid = user && (await bcrypt.compare(password, user.password))

    if (!isValid) return res.status(401).json({ error: 'invalid username or password' })

    const access_token = jwt.sign({ username, sub: user.id }, getEnvVars('SECRET_TOKEN'), { expiresIn: '365 days' })
    await createJWTToken(access_token)

    DEBUG('jwtToken: %s', access_token)

    res.cookie('jwt', access_token, { httpOnly: true, maxAge: 3600 * 1000 * 24 * 365 })
    res.json({ access_token })
}
