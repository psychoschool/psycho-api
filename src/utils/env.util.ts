import dotenv from 'dotenv'

type VAR = 'SECRET_TOKEN' | 'DEBUG' | 'DB_HOST'
export const getEnvVars = (variable: VAR, initial = '') => {
    dotenv.config()

    return process.env[variable] ?? initial
}
