import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { getEnvVars } from 'src/utils'
import { createJWTToken, createUser } from 'app/resources/api'
import type { UserRequest } from 'app/resources/types'

export const signUp = async (req: Request, res: Response) => {
    const { username, phone, email, firstName, lastName, password } = req.body as UserRequest
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await createUser({ username, phone, email, firstName, lastName, password: hashedPassword })

    const access_token = jwt.sign({ username, sub: user.id }, getEnvVars('SECRET_TOKEN'), { expiresIn: '91 days' })
    await createJWTToken(access_token, user.id)

    res.cookie('jwt', access_token, { httpOnly: true, maxAge: 3600 * 1000 * 24 * 91 })
    res.json({ id: user.id })
}
