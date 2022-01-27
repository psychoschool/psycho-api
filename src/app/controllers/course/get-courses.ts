import { NextFunction, Request, Response } from 'express'
import { fetchCourseBySlug, fetchCourses } from 'app/resources/api'

export const getCourses = (req: Request, res: Response, next: NextFunction) => {
    // todo: add validation
    const { slug } = req.query

    if (slug) {
        fetchCourseBySlug(slug as string)
            .then(course => res.send({ result: course }))
            .catch(next)
    } else {
        fetchCourses()
            .then(courses => res.send({ result: courses }))
            .catch(next)
    }
}
