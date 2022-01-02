import { Request, Response, NextFunction } from 'express'
import * as userResource from 'app/resources/api'

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    userResource
        .fetchUserById(id)
        .then(user => res.json({ result: user }))
        .catch(next)
}
