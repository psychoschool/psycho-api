export type CourseResponse = Course
export type CourseRequest = Course

export interface Section {
    id: string
    title: string
    lectures: Array<Lecture>
}

export interface Course {
    id: string
    title: string
    image: string
    isFree: boolean
    description: string
    sections: Array<Section>
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
