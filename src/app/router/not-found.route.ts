import { Router } from 'express'
import { notFound } from 'app/controllers'

export const notFoundRoutes = (router: Router) => {
    router.all('*', notFound)
}
