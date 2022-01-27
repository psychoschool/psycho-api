import { model, Schema } from 'mongoose'
import { Lesson, LessonDoc } from 'app/resources/types'

const LessonSchema = new Schema<LessonDoc>({
    slug: String,
    course: { type: 'ObjectId', ref: 'courses' },
    user: { type: 'ObjectId', ref: 'users' },
    completedLectures: [String],
    purchasedPrice: Number
})

LessonSchema.virtual('progress').get(function (this: Lesson) {
    const completed = this.completedLectures.length
    const total = this.course.lecCount

    return completed / total
})

export const LessonsModel = model('lessons', LessonSchema)
