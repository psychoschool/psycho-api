import { NextFunction, Request, Response } from 'express'
import * as lessonResource from 'app/resources/api/lesson.resource'

export const getUserLessons = (req: Request, res: Response, next: NextFunction) => {
    // todo: add validation
    const { userId } = req.params
    const { url } = req.query

    if (url) {
        lessonResource
            .fetchUserLessonsByUrl(userId, url as string)
            .then(courses => res.send(courses))
            .catch(next)
    } else {
        lessonResource
            .fetchUserLessons(userId)
            .then(courses => res.send(courses))
            .catch(next)
    }
}

export const addLesson = (req: Request, res: Response, next: NextFunction) => {
    const { course, user, url, paidPlan } = req.body
    // todo: add validation
    lessonResource
        .addLesson(course, user, url, paidPlan)
        .then(lesson =>
            res.json({
                course: lesson.course,
                user: lesson.user,
                completedLectures: lesson.completedLectures,
                paidPlan: lesson.paidPlan,
                url: lesson.url,
                id: course['_id']
            })
        )
        .catch(next)
}

export const removeLesson = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    lessonResource
        .removeLesson(id)
        .then(() => res.json({ id }))
        .catch(next)
}
