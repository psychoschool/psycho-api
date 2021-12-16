import { Router } from 'express'
import { auth } from 'app/middlewares'
import { getAllCourses, addCourse } from 'app/controllers/courses'

export const coursesRoutes = (router: Router) => {
    router.get('/api/v1/courses', getAllCourses)
    router.post('/api/v1/courses', [auth], addCourse)
}
