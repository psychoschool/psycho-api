import { NextFunction, Request, Response } from 'express'
import { fetchCourses } from 'app/resources/api'

export const getAllCourses = (_: Request, res: Response, next: NextFunction) => {
    fetchCourses()
        .then(courses => res.send(courses))
        .catch(next)
}
