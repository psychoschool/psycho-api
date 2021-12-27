import { model, Schema } from 'mongoose'
import { LessonDoc } from 'app/resources/types'

const LessonSchema = new Schema<LessonDoc>({
    url: String,
    course: { type: 'ObjectId', ref: 'courses' },
    user: { type: 'ObjectId', ref: 'users' },
    completedLectures: [String],
    purchasedPrice: Number
})

export const LessonsModel = model('lessons', LessonSchema)
