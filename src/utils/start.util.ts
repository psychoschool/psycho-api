import { Express } from 'express'
import { connectDb } from 'src/utils'

export const startApp = async (server: Express) => {
    try {
        await connectDb()
        server.listen(8080, () => {
            console.log('server running on 8080')
        })
    } catch (err) {
        console.log('connection failed')
    }
}
