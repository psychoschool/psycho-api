import { NextFunction, Request, Response } from 'express'
import * as lessonResource from 'app/resources/api/lesson.resource'

export const addLesson = (req: Request, res: Response, next: NextFunction) => {
    const { course, user, url, paidPlan } = req.body
    // todo: add validation
    lessonResource
        .addLesson(course, user, url, paidPlan)
        .then(lesson => res.json({ data: lesson }))
        .catch(next)
}
