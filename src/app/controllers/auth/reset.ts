import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

import { AuthError } from 'app/errors'
import { fetchUserById, updateUserById } from 'app/resources/api'
import { User, UserRequest } from 'app/resources/types'
import { getEnvVars } from 'src/utils'

export const reset = async (req: Request, res: Response) => {
    const { userId, token } = req.params
    const { password } = req.body as UserRequest
    const user = (await fetchUserById(userId, true)) as User
    if (!user) throw new AuthError('User is not registered')

    const secret = getEnvVars('SECRET_TOKEN') + user.password

    jwt.verify(token, secret, async err => {
        if (err) return res.sendStatus(403)

        const hashedPassword = await bcrypt.hash(password, 10)
        updateUserById(userId, { password: hashedPassword }).then(user => res.json({ user }))
    })
}
