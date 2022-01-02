import { connect } from 'mongoose'
import { getEnvVars } from 'src/utils/env.util'

export const connectDb = () => {
    const host = `${getEnvVars('DB_HOST')}?authSource=admin`

    connect(host).then(() => {
        console.log('connected to DB successfully!')
    })
}
