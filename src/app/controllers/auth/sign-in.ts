import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { getEnvVars } from 'src/utils'
import { createJWTToken, fetchUserByEmail } from 'app/resources/api'
import { UserRequest } from 'app/resources/types'

export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body as UserRequest
    const user = await fetchUserByEmail(email)
    const isValid = user && (await bcrypt.compare(password, user.password))

    if (!isValid) return res.status(401).json({ error: 'invalid username or password' })

    const access_token = jwt.sign({ email, sub: user.id }, getEnvVars('SECRET_TOKEN'), { expiresIn: '91 days' })
    await createJWTToken(access_token, user.id)

    res.cookie('jwt', access_token, { domain: '.psychoschool.ru', httpOnly: true, maxAge: 3600 * 1000 * 24 * 91 })
    res.json({ access_token })
}
