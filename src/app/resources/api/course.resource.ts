import { Types } from 'mongoose'
import type { CourseRequest } from 'app/resources/types'
import { CourseModel, normalizeCourse } from 'app/resources/schemas'

export const fetchCourses = () => {
    return CourseModel.find()
        .populate({ path: 'author', model: 'users' })
        .then(courses => courses.map(normalizeCourse))
}

export const createCourse = (courseParams: CourseRequest, authorId: string) => {
    const course = new CourseModel(courseParams)
    course.author = new Types.ObjectId(authorId)

    return course.save()
}
