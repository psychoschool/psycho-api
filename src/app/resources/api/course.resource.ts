import { Types } from 'mongoose'
import type { CourseRequest } from 'app/resources/types'
import { CourseModel, normalizeCourse } from 'app/resources/schemas'
import { RequestError } from 'app/errors'

export const fetchCourses = () => {
    return CourseModel.find()
        .populate({ path: 'author', model: 'users' })
        .then(courses => courses.map(normalizeCourse))
}

export const fetchCourseById = (id: string) => {
    return CourseModel.findById(id)
        .populate({ path: 'author', model: 'users' })
        .then(course => course && normalizeCourse(course))
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const fetchCourseByUrl = (url: string) => {
    return CourseModel.findOne({ url })
        .populate({ path: 'author', model: 'users' })
        .then(course => course && normalizeCourse(course))
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const createCourse = (courseParams: CourseRequest, authorId: string) => {
    const course = new CourseModel(courseParams)
    course.author = new Types.ObjectId(authorId)

    return course.save()
}
