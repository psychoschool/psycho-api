import { model, Schema } from 'mongoose'
import { Lesson } from 'app/resources/types'

const LessonSchema = new Schema<Lesson>({
    course: {
        type: Schema.Types.ObjectId,
        ref: 'courses'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    url: String,
    completedLectures: [String],
    paidPlan: String
})

export const LessonsModel = model('lessons', LessonSchema)
