import { Course, CourseResponse } from 'app/resources/types'
import { normalizeUser } from 'app/resources/schemas'

export const normalizeCourse = (course: Course): CourseResponse => ({
    id: course.id,
    title: course.title,
    image: course.image,
    description: course.description,
    author: normalizeUser(course.author),
    slug: course.slug,
    duration: course.duration,
    sections: course.sections.map(section => ({
        id: section.id,
        title: section.title,
        duration: section.duration,
        lectures: section.lectures.map(lecture => ({
            id: lecture.id,
            title: lecture.title,
            type: lecture.type,
            video: lecture.video
                ? {
                      provider: lecture.video.provider,
                      videoId: lecture.video.videoId,
                      duration: lecture.video.duration,
                      videoUrl: lecture.video.videoUrl
                  }
                : undefined
        }))
    })),
    lecCount: course.lecCount,
    skills: course.skills,
    isFree: course.isFree,
    price: {
        cost: course.price.cost,
        promoCost: course.price.promoCost
    }
})
