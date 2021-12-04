import express, { json } from 'express'
import cookie from 'cookie-parser'
import 'express-async-errors'

import { queryParser, logger, error } from './middlewares'
import { router } from './router'

export const app = express()

app.set('trust proxy', true)
app.use(json())
app.use(cookie())
app.set('query parser', queryParser)
app.use(logger)
app.use(router)
app.use(error)
