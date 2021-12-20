import { Types } from 'mongoose'
import { LessonsModel, normalizeLesson } from 'app/resources/schemas'

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
}

export const addLesson = (course: string, user: string, paidPlan: string) => {
    return new LessonsModel({
        course: course,
        user: user,
        completedLectures: [],
        paidPlan
    }).save()
}

export const removeLesson = (id: string) => LessonsModel.findByIdAndRemove(id)
