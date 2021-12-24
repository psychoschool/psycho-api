import { Course, CourseResponse } from 'app/resources/types'
import { normalizeUser } from 'app/resources/schemas'

export const normalizeCourse = (course: Course): CourseResponse => ({
    id: course.id,
    title: course.title,
    image: course.image,
    description: course.description,
    author: normalizeUser(course.author),
    url: course.url,
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
    skills: course.skills,
    isFree: course.isFree,
    price: {
        cost: course.price.cost,
        promoCost: course.price.promoCost
    }
})
