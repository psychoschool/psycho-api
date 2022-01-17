import { Request, Response, NextFunction } from 'express'
import { sendEmail } from 'src/utils/mail'
import { fetchCourseById, fetchUserById } from 'app/resources/api'
import { RequestError } from 'app/errors'

export const sendStartCourse = async (req: Request, res: Response, next: NextFunction) => {
    const { userId, courseId } = req.body
    const user = await fetchUserById(userId)
    const course = await fetchCourseById(courseId)

    if (!user || !course) throw new RequestError('invalid user or course')

    sendEmail({
        to: 'ollylut@gmail.com',
        subject: 'Вы зачислены!',
        template: 'start-course',
        context: { user, course, date: new Date().toLocaleDateString() }
    })
        .then(message => {
            res.status(200).json({ message })
        })
        .catch(next)
}
