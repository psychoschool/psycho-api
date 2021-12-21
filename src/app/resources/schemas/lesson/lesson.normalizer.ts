import { Lesson, LessonResponse } from 'app/resources/types'
import { normalizeCourse, normalizeUser } from 'app/resources/schemas'

export const normalizeLesson = (lesson: Lesson): LessonResponse => ({
    id: lesson.id,
    user: normalizeUser(lesson.user),
    course: normalizeCourse(lesson.course),
    completedLectures: lesson.completedLectures,
    paidPlan: lesson.paidPlan,
    url: lesson.url
})
