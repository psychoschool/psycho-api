import { Router } from 'express'
import { signUp, signIn, signOut, forgot } from 'app/controllers'

export const authRoutes = (router: Router) => {
    router.post('/api/v1/signup', signUp)
    router.post('/api/v1/login', signIn)
    router.post('/api/v1/logout', signOut)
    router.post('/api/v1/forgot', forgot)
}
