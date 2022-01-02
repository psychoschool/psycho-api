import { Router } from 'express'

import { staticRoutes } from './static.route'
import { authRoutes } from './auth.route'
import { userRoutes } from './user.route'
import { notFoundRoutes } from './not-found.route'
import { coursesRoutes } from 'app/router/courses'
import { lessonsRoutes } from 'app/router/lesson'

export const router = Router()
staticRoutes(router)
authRoutes(router)
userRoutes(router)
coursesRoutes(router)
lessonsRoutes(router)
notFoundRoutes(router)
