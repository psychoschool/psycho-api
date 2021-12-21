import { NextFunction, Request, Response } from 'express'
import { fetchCourseById } from 'app/resources/api'

export const getByCourseId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    fetchCourseById(id as string)
        .then(courses => res.send(courses))
        .catch(next)
}
