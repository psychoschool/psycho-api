import { Request, Response } from 'express'
import { CourseRequest } from 'app/resources/types'
import { createCourse } from 'app/resources/api'
import { RequestError } from 'app/errors'

export const addCourse = (req: Request, res: Response) => {
    const course = req.body as CourseRequest
    const { user } = res.locals
    if (user.role === 'student') throw new RequestError('Students can`t add courses')

    createCourse(course, user.sub).then(course => res.json({ id: course.id }))
}
