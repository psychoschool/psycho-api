import { Types } from 'mongoose'
import { LessonsModel, normalizeLesson } from 'app/resources/schemas'
import { RequestError } from 'app/errors'

export const fetchUserLessons = (userId: string) => {
    const user = new Types.ObjectId(userId)
    return LessonsModel.find({ user })
        .populate({ path: 'user', model: 'users' })
        .populate({
            path: 'course',
            model: 'courses',
            populate: {
                path: 'author',
                model: 'users'
            }
        })
        .then(res => res.map(normalizeLesson))
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const addLesson = (course: string, user: string, paidPlan: string) => {
    return new LessonsModel({
        course: course,
        user: user,
        completedLectures: [],
        paidPlan
    })
        .save()
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const removeLesson = (id: string) => LessonsModel.findByIdAndRemove(id)
