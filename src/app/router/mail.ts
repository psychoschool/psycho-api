import { Router } from 'express'
import { auth } from 'app/middlewares'
import { sendStartCourse } from 'app/controllers'

export const mailRoutes = (router: Router) => {
    router.post('/api/v1/mail/start', [auth], sendStartCourse)
}
