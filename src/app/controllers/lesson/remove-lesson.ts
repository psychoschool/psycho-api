import { NextFunction, Request, Response } from 'express'
import * as lessonResource from 'app/resources/api/lesson.resource'

export const removeLesson = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    lessonResource
        .removeLesson(id)
        .then(() => res.json({ data: id }))
        .catch(next)
}
