import { LessonResponse, Lesson } from 'app/resources/types'
import { normalizeCourse, normalizeUser } from 'app/resources/schemas'

export const normalizeLesson = (lesson: Lesson): LessonResponse => ({
    id: lesson.id,
    user: normalizeUser(lesson.user),
    course: normalizeCourse(lesson.course),
    completedLectures: lesson.completedLectures,
    purchasedPrice: lesson.purchasedPrice,
    isFree: lesson.course.isFree,
    url: lesson.url
})
