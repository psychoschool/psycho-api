import { Schema, model } from 'mongoose'
import type { CourseDoc, Lecture } from 'app/resources/types'

const LectureSchema = new Schema<Lecture>({
    type: String,
    title: String,
    video: {
        provider: String,
        videoId: String,
        videoUrl: String,
        duration: Number
    }
})

const SectionSchema = new Schema<CourseDoc['sections'][number]>({
    title: String,
    lectures: [LectureSchema]
})

SectionSchema.virtual('duration').get(function (this: CourseDoc['sections'][number]) {
    return this.lectures.reduce((res, lec) => {
        const duration = lec.video?.duration ?? 0

        return res + duration
    }, 0)
})

const CourseSchema = new Schema<CourseDoc>({
    title: { type: String, required: [true, 'title is required'] },
    description: String,
    url: { type: String, unique: true },
    image: { type: String, required: [true, 'image is required'] },
    author: { type: 'ObjectId', ref: 'users', required: [true, 'author is required'] },
    sections: [SectionSchema],
    skills: [String],
    price: { cost: Number, promoCost: Number },
    isFree: { type: Boolean, required: [true, 'isFree is required field'] }
})

CourseSchema.virtual('lecCount').get(function (this: CourseDoc) {
    return this.sections.reduce((res, sec) => res + sec.lectures.length, 0)
})

CourseSchema.virtual('duration').get(function (this: CourseDoc) {
    return this.sections.reduce((res, sec) => res + sec.duration, 0)
})

export const CourseModel = model('courses', CourseSchema)
