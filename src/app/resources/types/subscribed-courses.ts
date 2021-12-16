import { Course } from 'app/resources/types/course.type'

export interface UserCourse {
    course: Course
    completedLectures: Array<string>
}

export interface SubscribedCourses {
    count: number
    results: Array<UserCourse>
}
