import { Request, Response } from 'express'
import { fetchCourses } from 'app/resources/api'

export const getAllCourses = (_: Request, res: Response) => {
    fetchCourses().then(courses => res.send(courses))
}
