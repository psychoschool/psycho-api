import { NextFunction, Request, Response } from 'express'
import * as lessonResource from 'app/resources/api/lesson.resource'
import { sendEmail } from 'src/utils/mail'

export const addLesson = (req: Request, res: Response, next: NextFunction) => {
    const { course, user, url, price } = req.body
    // todo: add validation
    lessonResource
        .addLesson(course, user, url, price)
        .then(lesson => {
            if (lesson) {
                sendEmail({
                    to: lesson.user.email,
                    subject: 'Вы зачислены!',
                    template: 'start-course',
                    context: { user: lesson.user, course: lesson.course, date: new Date().toLocaleDateString() }
                })
            }
            return lesson
        })
        .then(lesson => res.json({ result: lesson }))
        .catch(next)
}
