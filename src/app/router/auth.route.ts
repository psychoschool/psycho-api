import { Router } from 'express'
import { logout, signIn } from 'app/controllers'

export const authRoutes = (router: Router) => {
    router.post('/login', signIn)
    router.post('/logout', logout)
}
