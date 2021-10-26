import { Router } from 'express'
import { signUp, signIn, signOut } from 'app/controllers'

export const authRoutes = (router: Router) => {
    router.post('/signup', signUp)
    router.post('/login', signIn)
    router.post('/logout', signOut)
}
