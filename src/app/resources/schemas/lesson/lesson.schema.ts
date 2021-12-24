import { model, Schema } from 'mongoose'
import { Lesson } from 'app/resources/types'

const LessonSchema = new Schema<Lesson>({
    url: String,
    course: { type: Schema.Types.ObjectId, ref: 'courses' },
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    completedLectures: [String],
    purchasedPrice: Number
})

export const LessonsModel = model('lessons', LessonSchema)
