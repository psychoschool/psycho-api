import { Request, Response, NextFunction } from 'express'
import * as userResource from 'app/resources/api'

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
    userResource
        .fetchUsers()
        .then(users => res.json({ result: users }))
        .catch(next)
}
