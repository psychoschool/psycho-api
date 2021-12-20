import { Course, CourseResponse } from 'app/resources/types'

export const normalizeCourse = (course: Course): CourseResponse => ({
    id: course.id,
    title: course.title,
    image: course.image,
    isFree: course.isFree,
    description: course.description,
    author: course.author,
    sections: course.sections,
    paidPlans: course.paidPlans
})
