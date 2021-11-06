import { Router } from 'express'

import { getUsers, getUserById } from 'app/controllers'
import { auth } from 'app/middlewares'

export const userRoutes = (router: Router) => {
    router.get('/api/v1/users', [auth], getUsers)
    router.get('/api/v1/me', [auth], getUserById)
}
