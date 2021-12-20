import { Router } from 'express'
import { auth } from 'app/middlewares'
import { getUserLessonByCourseId, getUserLessons, addLessonToUser } from 'app/controllers'

export const lessonsRoutes = (router: Router) => {
    router.get('/api/v1/lessons/course/:courseId', [auth], getUserLessonByCourseId)
    router.get('/api/v1/lessons/user/:userId', [auth], getUserLessons)
    router.post('/api/v1/lessons', [auth], addLessonToUser)
}
