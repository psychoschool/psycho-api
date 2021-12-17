import { LessonsModel, normalizeLesson } from 'app/resources/schemas'

export const fetchAllLessonsByUserId = (user: string) =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    LessonsModel.find({ user }).then(res => res.map(normalizeLesson))

export const fetchLessonByUserId = (user: string, course: string) =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    LessonsModel.find({ user, course }).then(res => res.map(normalizeLesson))

export const createLessonByUser = (course: string, user: string, paidPlan: string) => {
    return new LessonsModel({
        course: course,
        user: user,
        completedLectures: [],
        paidPlan
    }).save()
}
