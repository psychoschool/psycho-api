export type CourseResponse = Course
export type CourseRequest = Omit<Course, 'id' | 'author'>

export interface Course {
    id: string
    title: string
    image: string
    url: string
    isFree: boolean
    description: string
    author: any
    sections: Array<{
        id: string
        title: string
        lectures: Array<Lecture>
    }>
    price: { cost: number; promoCost?: number }
    skills: Array<string>
}

export interface Lecture {
    id: string
    type: 'video'
    url: string
    title: string
}
