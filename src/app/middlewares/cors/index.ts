import corsMiddleware from 'cors'

export const cors = corsMiddleware({
    credentials: true,
    origin: [/psychoschool.ru/]
})
