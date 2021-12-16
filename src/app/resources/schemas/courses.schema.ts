import { Schema, model } from 'mongoose'
import type { Course, CourseResponse, Section, Lecture } from 'app/resources/types'

const LectureSchema = new Schema<Lecture>({
    type: String,
    url: String,
    title: String
})

const SectionSchema = new Schema<Section>({
    title: String,
    lectures: [LectureSchema]
})

const CourseSchema = new Schema<Course>({
    title: String,
    description: String,
    image: String,
    isFree: Boolean,
    sections: [SectionSchema]
})

export const CourseModel = model('courses', CourseSchema)

export const normalizeCourse = (course: Course): CourseResponse => course
