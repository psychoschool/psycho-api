import { NextFunction, Request, Response } from 'express'
import { fetchCourseByUrl, fetchCourses } from 'app/resources/api'

export const getCourses = (req: Request, res: Response, next: NextFunction) => {
    const { url } = req.query
    if (url) {
        fetchCourseByUrl(url as string)
            .then(courses => res.send(courses))
            .catch(next)
    } else {
        fetchCourses()
            .then(courses => res.send(courses))
            .catch(next)
    }
}
