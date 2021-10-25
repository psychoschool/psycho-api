import { Router } from 'express'

import { staticRoutes } from './static.route'
import { authRoutes } from './auth.route'
import { userRoutes } from './user.route'

export const router = Router()
staticRoutes(router)
authRoutes(router)
userRoutes(router)
