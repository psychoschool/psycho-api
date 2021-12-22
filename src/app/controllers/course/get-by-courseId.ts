import { NextFunction, Request, Response } from 'express'
import { fetchCourseById } from 'app/resources/api'

export const getByCourseId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    // todo: add validation
    fetchCourseById(id as string)
        .then(course => res.send({ data: course }))
        .catch(next)
}
