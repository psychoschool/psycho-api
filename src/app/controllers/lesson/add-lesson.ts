import { NextFunction, Request, Response } from 'express'
import * as lessonResource from 'app/resources/api/lesson.resource'

export const addLesson = (req: Request, res: Response, next: NextFunction) => {
    const { course, user, url, price } = req.body
    // todo: add validation
    lessonResource
        .addLesson(course, user, url, price)
        .then(lesson => res.json({ result: lesson }))
        .catch(next)
}
