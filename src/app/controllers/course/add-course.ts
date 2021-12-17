import { Request, Response } from 'express'
import { createCourse } from 'app/resources/api'

export const addCourse = (req: Request, res: Response) => {
    // validate req.body
    createCourse(req.body).then(course => res.json({ id: course.id }))
}
