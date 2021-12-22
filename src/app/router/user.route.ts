import { Router } from 'express'

import { getUsers, getCurrentUser, getUserById, updateUser } from 'app/controllers'
import { auth } from 'app/middlewares'

export const userRoutes = (router: Router) => {
    router.get('/api/v1/users', [auth], getUsers)
    router.get('/api/v1/users/:id', [auth], getUserById)
    router.put('/api/v1/users/:id', [auth], updateUser)
    router.get('/api/v1/me', [auth], getCurrentUser)
}
