import { Request, Response, NextFunction } from 'express'
import * as userResource from 'app/resources/api'

export const updateUserById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const payload = req.body

    userResource
        .updateUserById(id, payload)
        .then(user => res.json({ data: user }))
        .catch(next)
}
