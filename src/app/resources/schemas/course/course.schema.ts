import { Schema, model } from 'mongoose'
import type { Course, Lecture } from 'app/resources/types'

const LectureSchema = new Schema<Lecture>({
    type: String,
    url: String,
    title: String
})

const CourseSchema = new Schema<Course>({
    title: String,
    description: String,
    url: { type: String, unique: true },
    image: String,
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    sections: [{ title: String, lectures: [LectureSchema] }],
    skills: [String],
    price: { cost: Number, promoCost: Number },
    isFree: Boolean
})

export const CourseModel = model('courses', CourseSchema)
