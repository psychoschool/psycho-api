import { Document, Types } from 'mongoose'
import { Course, CourseResponse, User, UserResponse } from 'app/resources/types'

export type LessonResponse = {
    id: string
    course: CourseResponse
    user: UserResponse
    completedLectures: Array<string>
    purchasedPrice?: number
    isFree: boolean
    url: string
}

export interface LessonDoc extends Partial<Document> {
    id: string
    url: string
    user: Types.ObjectId
    course: Types.ObjectId
    completedLectures: Array<string>
    purchasedPrice?: number
}

export type Lesson = Omit<LessonDoc, 'course' | 'user'> & {
    course: Course
    user: User
}
