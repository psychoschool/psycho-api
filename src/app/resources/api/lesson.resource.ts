import { Types } from 'mongoose'
import { LessonsModel, normalizeLesson } from 'app/resources/schemas'
import { Lesson, LessonDoc, LessonResponse } from 'app/resources/types'
import { RequestError } from 'app/errors'

export const fetchUserLessons = (userId: string): Promise<Array<LessonResponse>> => {
    const user = new Types.ObjectId(userId)
    return LessonsModel.find({ user })
        .populate({ path: 'user', model: 'users' })
        .populate<Lesson>({
            path: 'course',
            model: 'courses',
            populate: {
                path: 'author',
                model: 'users'
            }
        })
        .exec()
        .then(res => res.map(normalizeLesson))
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const fetchUserLessonBySlug = (userId: string, slug: string): Promise<LessonResponse | null> => {
    const user = new Types.ObjectId(userId)
    return LessonsModel.findOne({ user, slug })
        .populate({ path: 'user', model: 'users' })
        .populate<Lesson>({
            path: 'course',
            model: 'courses',
            populate: {
                path: 'author',
                model: 'users'
            }
        })
        .orFail()
        .exec()
        .then(lesson => {
            if (lesson) return normalizeLesson(lesson)
            return null
        })
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const fetchUserLessonById = (id: string): Promise<LessonResponse | null> => {
    return LessonsModel.findById(id)
        .populate({ path: 'user', model: 'users' })
        .populate<Lesson>({
            path: 'course',
            model: 'courses',
            populate: {
                path: 'author',
                model: 'users'
            }
        })
        .exec()
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
    slug: string,
    purchasedPrice: string
): Promise<LessonResponse | null> => {
    return new LessonsModel({ course, user, completedLectures: [], slug, purchasedPrice })
        .save()
        .then(() => fetchUserLessonBySlug(user, slug))
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const updateLesson = (id: string, payload: Partial<LessonDoc>): Promise<LessonResponse | null> => {
    return LessonsModel.findByIdAndUpdate(id, payload)
        .exec()
        .then(() => fetchUserLessonById(id))
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const removeLesson = (id: string) => LessonsModel.findByIdAndRemove(id).exec()
