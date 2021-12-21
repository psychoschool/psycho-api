import { CourseResponse, UserResponse } from 'app/resources/types'

export type LessonResponse = {
    id: string
    course: CourseResponse
    user: UserResponse
    completedLectures: Array<string>
    paidPlan: string
    url: string
}

export interface Lesson {
    id: string
    course: any
    user: any
    url: string
    completedLectures: Array<string>
    paidPlan: string
}
