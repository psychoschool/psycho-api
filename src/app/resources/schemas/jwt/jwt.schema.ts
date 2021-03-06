import { Schema, model } from 'mongoose'
import type { JWT } from 'app/resources/types'

const JWTSchema = new Schema<JWT>({
    token: String,
    sub: String
})

export const JWTModel = model('jwt', JWTSchema)
