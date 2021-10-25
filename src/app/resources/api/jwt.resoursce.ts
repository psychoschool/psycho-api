import { JWTModel } from 'app/resources/schemas'

export const createJWTToken = (token: string) => new JWTModel({ token }).save()

export const findToken = async (token: string) => JWTModel.findOne({ token })

export const removeJWTToken = (token: string) => JWTModel.remove({ token })
