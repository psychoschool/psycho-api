import { Document, Types } from 'mongoose'
import { Course, CourseResponse, User, UserResponse } from 'app/resources/types'

export type LessonResponse = {
    id: string
    slug: string
    user: UserResponse
    isFree: boolean
    course: CourseResponse
    progress: number
    purchasedPrice?: number
    completedLectures: Array<string>
}

export interface LessonDoc extends Partial<Document> {
    id: string
    slug: string
    user: Types.ObjectId
    course: Types.ObjectId
    progress: number
    purchasedPrice?: number
    completedLectures: Array<string>
}

export type Lesson = Omit<LessonDoc, 'course' | 'user'> & {
    course: Course
    user: User
}
