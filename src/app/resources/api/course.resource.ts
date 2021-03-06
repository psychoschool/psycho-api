import { Types } from 'mongoose'
import type { Course, CourseRequest, CourseResponse } from 'app/resources/types'
import { CourseModel, normalizeCourse } from 'app/resources/schemas'
import { RequestError } from 'app/errors'

export const fetchCourses = (): Promise<Array<CourseResponse>> => {
    return CourseModel.find()
        .populate<Course>({ path: 'author', model: 'users' })
        .exec()
        .then(courses => courses.map(normalizeCourse))
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const fetchCourseById = (id: string): Promise<CourseResponse | null> => {
    return CourseModel.findById(id)
        .populate<Course>({ path: 'author', model: 'users' })
        .exec()
        .then(course => {
            if (course) return normalizeCourse(course)
            return null
        })
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const fetchCourseBySlug = (slug: string): Promise<CourseResponse | null> => {
    return CourseModel.findOne({ slug })
        .populate<Course>({ path: 'author', model: 'users' })
        .exec()
        .then(course => {
            if (course) return normalizeCourse(course)
            return null
        })
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const createCourse = (courseParams: CourseRequest, authorId: string): Promise<{ id: string }> => {
    const course = new CourseModel(courseParams)
    course.author = new Types.ObjectId(authorId)

    return course
        .save()
        .then(course => ({ id: course.id }))
        .catch(error => {
            throw new RequestError(error.message)
        })
}
