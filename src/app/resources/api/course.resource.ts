import type { CourseRequest } from 'app/resources/types'
import { normalizeCourse, CourseModel } from 'app/resources/schemas'

export const fetchCourses = () => CourseModel.find().then(courses => courses.map(normalizeCourse))

export const createCourse = (course: CourseRequest) => new CourseModel(course).save()
