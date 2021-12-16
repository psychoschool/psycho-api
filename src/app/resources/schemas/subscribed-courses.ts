import { Schema } from 'mongoose'
import type { SubscribedCourses, UserCourse } from 'app/resources/types/subscribed-courses'

const UserCourseSchema = new Schema<UserCourse>({
    course: {
        type: Schema.Types.ObjectId,
        ref: 'courses'
    },
    completedLectures: [String]
})

const SubscribedCourseSchema = new Schema<SubscribedCourses>({
    results: [UserCourseSchema]
})

SubscribedCourseSchema.virtual('count').get(function () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.results.length
})
