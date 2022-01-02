import { JWTModel } from 'app/resources/schemas'
import { JWT } from 'app/resources/types'

export const createJWTToken = (token: string, sub: string): Promise<JWT> => {
    return new JWTModel({ token, sub }).save()
}

export const findToken = async (token: string): Promise<JWT | null> =>
    JWTModel.findOne({ token })
        .exec()
        .then(jwt => {
            if (jwt) return jwt
            return null
        })

export const removeJWTToken = (token: string) => JWTModel.remove({ token })
