import { Request, Response } from 'express'
import { createLessonByUser, fetchAllLessonsByUserId, fetchLessonByUserId } from 'app/resources/api'

export const getUserLessons = (req: Request, res: Response) => {
    fetchAllLessonsByUserId('').then(courses => res.send(courses))
}

export const getUserLessonByCourseId = (req: Request, res: Response) =>
    fetchLessonByUserId('', '').then(course => res.json(course))

export const addLessonToUser = (req: Request, res: Response) =>
    createLessonByUser('', '', '').then(course => res.json(course))
