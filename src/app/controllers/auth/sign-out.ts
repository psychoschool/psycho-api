import { Request, Response } from 'express'
import { removeJWTToken } from 'app/resources/api'

export const signOut = async (req: Request, res: Response) => {
    const token = req.cookies.jwt
    await removeJWTToken(token)

    res.cookie('jwt', '', { maxAge: 1 })
    res.sendStatus(204)
}
