import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { AuthError } from 'app/errors'
import { getEnvVars } from 'src/utils'
import { fetchUserByEmail } from 'app/resources/api'
import { JWTPayload, UserRequest } from 'app/resources/types'
import { sendEmail } from 'src/utils/mail'

export const forgot = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body as UserRequest
    const user = await fetchUserByEmail(email)
    const host = getEnvVars('HOST')
    if (!user) throw new AuthError('User is not registered')
    const secret = getEnvVars('SECRET_TOKEN') + user.password
    const access_token = jwt.sign({ email, sub: user.id, role: user.role } as JWTPayload, secret, {
        expiresIn: '15m'
    })
    const link = `${host}/api/v1/reset/${user.id}/${access_token}`

    sendEmail({
        to: user.email,
        subject: 'Востановление пароля!',
        template: 'reset',
        context: { link }
    })
        .then(() => res.json({ link }))
        .catch(next)
}
