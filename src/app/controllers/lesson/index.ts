import { Request, Response } from 'express'
import { createLessonByUser, fetchAllLessonsByUserId, fetchLessonByUserId } from 'app/resources/api'

export const getUserLessons = (req: Request, res: Response) => {
    const { userId } = req.params
    // todo: add validation

    fetchAllLessonsByUserId(userId).then(courses => res.send(courses))
}

export const getUserLessonByCourseId = (req: Request, res: Response) =>
    fetchLessonByUserId('', '').then(course => res.json(course))

export const addLessonToUser = (req: Request, res: Response) => {
    const { course, user, paidPlan } = req.body
    // todo: add validation
    createLessonByUser(course, user, paidPlan).then(course => res.json(course))
}
