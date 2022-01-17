import { Router } from 'express'

import { staticRoutes } from './static.route'
import { authRoutes } from './auth.route'
import { userRoutes } from './user.route'
import { notFoundRoutes } from './not-found.route'
import { coursesRoutes } from './courses'
import { lessonsRoutes } from './lesson'
import { mailRoutes } from './mail'

export const router = Router()
staticRoutes(router)
mailRoutes(router)
authRoutes(router)
userRoutes(router)
coursesRoutes(router)
lessonsRoutes(router)
notFoundRoutes(router)
