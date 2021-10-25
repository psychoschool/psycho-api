import { Router } from 'express'

import { getUsers, addUser } from 'app/controllers'
import { auth } from 'app/middlewares'

export const userRoutes = (router: Router) => {
    router.get('/users', [auth], getUsers)
    router.post('/users', [auth], addUser)
}
