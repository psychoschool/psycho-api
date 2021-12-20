import { CourseResponse, UserResponse } from 'app/resources/types'

export type LessonResponse = {
    id: string
    course: CourseResponse
    user: UserResponse
    completedLectures: Array<string>
    paidPlan: string
}

export interface Lesson {
    id: string
    course: any
    user: any
    completedLectures: Array<string>
    paidPlan: string
}
