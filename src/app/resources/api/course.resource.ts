import { Types } from 'mongoose'
import type { CourseRequest, CourseResponse } from 'app/resources/types'
import { CourseModel, normalizeCourse } from 'app/resources/schemas'
import { RequestError } from 'app/errors'

export const fetchCourses = (): Promise<Array<CourseResponse>> => {
    return CourseModel.find()
        .populate({ path: 'author', model: 'users' })
        .exec()
        .then(courses => courses.map(normalizeCourse))
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const fetchCourseById = (id: string): Promise<CourseResponse | null> => {
    return CourseModel.findById(id)
        .populate({ path: 'author', model: 'users' })
        .exec()
        .then(course => {
            if (course) return normalizeCourse(course)
            return null
        })
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const fetchCourseByUrl = (url: string): Promise<CourseResponse | null> => {
    return CourseModel.findOne({ url })
        .populate({ path: 'author', model: 'users' })
        .exec()
        .then(course => {
            if (course) return normalizeCourse(course)
            return null
        })
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const createCourse = (courseParams: CourseRequest, authorId: string) => {
    const course = new CourseModel(courseParams)
    course.author = new Types.ObjectId(authorId)

    return course.save()
}
