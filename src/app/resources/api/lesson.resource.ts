import { Types } from 'mongoose'
import { LessonsModel, normalizeLesson } from 'app/resources/schemas'

export const fetchAllLessonsByUserId = (userId: string) => {
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
}

export const fetchLessonByUserId = (userId: string, courseId: string) => {
    const user = new Types.ObjectId(userId)
    const course = new Types.ObjectId(courseId)

    return LessonsModel.find({ user, course }).then(res => res.map(normalizeLesson))
}

export const createLessonByUser = (course: string, user: string, paidPlan: string) => {
    return new LessonsModel({
        course: course,
        user: user,
        completedLectures: [],
        paidPlan
    }).save()
}
