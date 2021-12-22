import { NextFunction, Request, Response } from 'express'
import * as lessonResource from 'app/resources/api/lesson.resource'

export const updateLesson = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const payload = req.body
    // todo: add validation
    lessonResource
        .updateLesson(id, payload)
        .then(lesson => res.json({ data: lesson }))
        .catch(next)
}
