import { connect } from 'mongoose'
import { getEnvVars } from 'src/utils/env.util'

export const connectDb = () =>
    connect(getEnvVars('DB_HOST')).then(c => {
        console.log('connected to DB successfully!')
        return c
    })
