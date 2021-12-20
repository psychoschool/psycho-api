import { Course, CourseResponse } from 'app/resources/types'
import { normalizeUser } from 'app/resources/schemas'

export const normalizeCourse = (course: Course): CourseResponse => ({
    id: course.id,
    title: course.title,
    image: course.image,
    isFree: course.isFree,
    description: course.description,
    author: normalizeUser(course.author),
    sections: course.sections.map(section => ({
        id: section.id,
        title: section.title,
        lectures: section.lectures.map(lecture => ({
            id: lecture.id,
            title: lecture.title,
            type: lecture.type,
            url: lecture.url
        }))
    })),
    paidPlans: course.paidPlans.map(plan => ({
        id: plan.id,
        name: plan.name,
        price: plan.price
    }))
})
