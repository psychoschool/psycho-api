import { Document, Types } from 'mongoose'
import { User, UserResponse } from 'app/resources/types/user.type'

export type CourseResponse = Omit<Course, 'author'> & {
    author: UserResponse
}

export type CourseRequest = Omit<Course, 'id' | 'author'>

export interface CourseDoc extends Partial<Document> {
    id: string
    title: string
    image: string
    url: string
    isFree: boolean
    description: string
    lecCount: number
    duration: number
    author: Types.ObjectId
    sections: Array<{
        id: string
        title: string
        duration: number
        lectures: Array<Lecture>
    }>
    price: { cost: number; promoCost?: number }
    skills: Array<string>
}

export type Course = Omit<CourseDoc, 'author'> & {
    author: User
}

export interface Lecture {
    id: string
    type: 'video'
    title: string
    video?: {
        provider: 'youtube' | 'wistia'
        videoId: string
        videoUrl: string
        duration: number
    }
}
