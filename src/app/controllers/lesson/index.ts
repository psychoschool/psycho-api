import { Request, Response } from 'express'
import * as lessonResource from 'app/resources/api/lesson.resource'

export const getUserLessons = (req: Request, res: Response) => {
    const { userId } = req.params
    // todo: add validation
    lessonResource.fetchUserLessons(userId).then(courses => res.send(courses))
}

export const addLesson = (req: Request, res: Response) => {
    const { course, user, paidPlan } = req.body
    // todo: add validation
    lessonResource.addLesson(course, user, paidPlan).then(course => res.json(course))
}

export const removeLesson = (req: Request, res: Response) => {
    const { id } = req.params
    lessonResource.removeLesson(id).then(() => res.json({ id }))
}
