import { Schema, model } from 'mongoose'
import type { CourseDoc, Lecture } from 'app/resources/types'

const LectureSchema = new Schema<Lecture>({
    type: String,
    url: String,
    title: String
})

const CourseSchema = new Schema<CourseDoc>({
    title: { type: String, required: [true, 'title is required'] },
    description: String,
    url: { type: String, unique: true },
    image: { type: String, required: [true, 'image is required'] },
    author: { type: 'ObjectId', ref: 'users', required: [true, 'author is required'] },
    sections: [{ title: String, lectures: [LectureSchema] }],
    skills: [String],
    price: { cost: Number, promoCost: Number },
    isFree: { type: Boolean, required: [true, 'isFree is required field'] }
})

export const CourseModel = model('courses', CourseSchema)
