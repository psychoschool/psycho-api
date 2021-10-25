import express, { json } from 'express'
import cookie from 'cookie-parser'

import { queryParser, logger } from './middlewares'
import { router } from './router'

export const app = express()

app.use(json())
app.use(cookie())
app.set('query parser', queryParser)
app.use(logger)
app.use(router)
