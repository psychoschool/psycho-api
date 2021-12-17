import { User } from 'app/resources/types'

export type CourseResponse = Course
export type CourseRequest = Course

export interface Course {
    id: string
    title: string
    image: string
    isFree: boolean
    description: string
    author: User
    sections: Array<{
        title: string
        lectures: Array<Lecture>
    }>
    paidPlans: Array<{ name: string; price: number }>
}

export interface Lecture {
    id: string
    type: 'video'
    url: string
    title: string
}

interface Test {
    type: 'test'
    duration: number
    questions: Array<{
        name: string
        type: 'single' | 'multi'
        answers: Array<{ name: string }>
    }>
}
