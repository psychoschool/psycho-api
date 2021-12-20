import { Router } from 'express'
import { auth } from 'app/middlewares'
import { getUserLessons, addLesson, removeLesson } from 'app/controllers'

export const lessonsRoutes = (router: Router) => {
    router.get('/api/v1/lessons/user/:userId', [auth], getUserLessons)
    router.post('/api/v1/lessons', [auth], addLesson)
    router.delete('/api/v1/lessons/:id', [auth], removeLesson)
}
