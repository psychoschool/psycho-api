import { Types } from 'mongoose'
import { LessonsModel, normalizeLesson } from 'app/resources/schemas'
import { LessonResponse } from 'app/resources/types'
import { RequestError } from 'app/errors'

export const fetchUserLessons = (userId: string): Promise<Array<LessonResponse>> => {
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

export const fetchUserLessonByUrl = (userId: string, url: string): Promise<LessonResponse | null> => {
    const user = new Types.ObjectId(userId)
    return LessonsModel.findOne({ user, url })
        .populate({ path: 'user', model: 'users' })
        .populate({
            path: 'course',
            model: 'courses',
            populate: {
                path: 'author',
                model: 'users'
            }
        })
        .then(lesson => {
            if (lesson) return normalizeLesson(lesson)
            return null
        })
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const addLesson = (
    course: string,
    user: string,
    url: string,
    paidPlan: string
): Promise<LessonResponse | null> => {
    return new LessonsModel({ course, user, completedLectures: [], url, paidPlan })
        .save()
        .then(() => fetchUserLessonByUrl(user, url))
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const removeLesson = (id: string) => LessonsModel.findByIdAndRemove(id).exec()
