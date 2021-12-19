import { Course, User } from 'app/resources/types'
import { Types } from 'mongoose'

export type LessonResponse = Lesson & {
    course: Course
    user: User
}

export interface Lesson {
    course: Types.ObjectId
    user: Types.ObjectId
    completedLectures: Array<string>
    paidPlan: string
}
