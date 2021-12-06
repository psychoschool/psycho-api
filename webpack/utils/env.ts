import { join } from 'path'

export const mode = process.env.NODE_ENV ?? 'production'
export const debug = process.env.DEBUG ?? true
export const isProd = mode === 'production'
export const isDev = !isProd

export const rootDir = join(__dirname, '../../')
export const webpackDir = join(__dirname, '../')
