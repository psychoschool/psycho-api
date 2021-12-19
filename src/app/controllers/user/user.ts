import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import * as userResource from 'app/resources/api'
import { getEnvVars } from 'src/utils'

export const getUsers = (req: Request, res: Response) => {
    userResource.fetchUsers().then(users => res.json(users))
}

export const getCurrentUser = async (req: Request, res: Response) => {
    const token = req.cookies.jwt as string

    const { sub } = await jwt.verify(token, getEnvVars('SECRET_TOKEN'))
    userResource.fetchUserById(sub as string).then(user => res.json(user))
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params

    userResource.fetchUserById(id).then(user => res.json(user))
}

export const updateUserById = async (req: Request, res: Response) => {
    const { id } = req.params
    const payload = req.body

    userResource.updateUserById(id, payload).then(user => res.json(user))
}
