import { Router } from 'express'
import { auth } from 'app/middlewares'
import { getCourses, addCourse, getByCourseId } from 'app/controllers'

export const coursesRoutes = (router: Router) => {
    router.get('/api/v1/courses', getCourses)
    router.get('/api/v1/courses/:id', getByCourseId)
    router.post('/api/v1/courses', [auth], addCourse)
}
