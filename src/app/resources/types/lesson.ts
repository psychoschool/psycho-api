import { Course, User } from 'app/resources/types'
export type LessonResponse = Lesson

export interface Lesson {
    course: Course
    user: User
    completedLectures: Array<string>
    paidPlan: string
}
