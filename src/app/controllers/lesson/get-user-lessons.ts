import { NextFunction, Request, Response } from 'express'
import * as lessonResource from 'app/resources/api/lesson.resource'

export const getUserLessons = (req: Request, res: Response, next: NextFunction) => {
    // todo: add validation
    const { userId } = req.params
    const { slug } = req.query

    if (slug) {
        lessonResource
            .fetchUserLessonBySlug(userId, slug as string)
            .then(course => res.send({ result: course }))
            .catch(next)
    } else {
        lessonResource
            .fetchUserLessons(userId)
            .then(courses => res.send({ result: courses }))
            .catch(next)
    }
}
