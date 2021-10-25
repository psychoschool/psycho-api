import { Request, Response } from 'express'
import { createUser, fetchUsers } from 'app/resources/api'
import type { User } from 'app/resources/types'

export const getUsers = (req: Request, res: Response) => {
    fetchUsers().then(users => res.json(users))
}

export const addUser = async (req: Request, res: Response) => {
    const { name, email, phone } = req.body as User

    createUser({ name, email, phone }).then(user => res.json(user))
}
