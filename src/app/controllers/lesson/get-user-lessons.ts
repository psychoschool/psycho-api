import { NextFunction, Request, Response } from 'express'
import * as lessonResource from 'app/resources/api/lesson.resource'

export const getUserLessons = (req: Request, res: Response, next: NextFunction) => {
    // todo: add validation
    const { userId } = req.params
    const { url } = req.query

    if (url) {
        lessonResource
            .fetchUserLessonByUrl(userId, url as string)
            .then(course => res.send({ data: course }))
            .catch(next)
    } else {
        lessonResource
            .fetchUserLessons(userId)
            .then(courses => res.send({ data: courses }))
            .catch(next)
    }
}
