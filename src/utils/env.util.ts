import dotenv from 'dotenv'

type VAR = 'SECRET_TOKEN' | 'DEBUG' | 'DB_HOST' | 'EMAIL_USER' | 'EMAIL_PASSWORD' | 'HOST' | 'API_MODE'
export const getEnvVars = (variable: VAR, initial = '') => {
    dotenv.config()

    return process.env[variable] ?? initial
}
