import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { getEnvVars } from 'src/utils'
import { createJWTToken, createUser, fetchUserByEmail } from 'app/resources/api'
import type { UserRequest } from 'app/resources/types'
import { RequestError } from 'app/errors'

export const signUp = async (req: Request, res: Response) => {
    const { phone, email, firstName, password, role = 'student' } = req.body as UserRequest
    if (await fetchUserByEmail(email)) throw new RequestError('Email in use')

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await createUser({ phone, email, firstName, password: hashedPassword, role })

    const access_token = jwt.sign({ email, sub: user.id }, getEnvVars('SECRET_TOKEN'), { expiresIn: '91 days' })
    await createJWTToken(access_token, user.id)

    res.cookie('jwt', access_token, { domain: '.psychoschool.ru', httpOnly: true, maxAge: 3600 * 1000 * 24 * 91 })
    res.json({ id: user.id, access_token })
}
