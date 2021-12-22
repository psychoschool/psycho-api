import { normalizeUser, UserModel } from 'app/resources/schemas'
import type { User, UserRequest, UserResponse } from 'app/resources/types'
import { RequestError } from 'app/errors'

export const fetchUsers = (): Promise<Array<UserResponse>> => {
    return UserModel.find()
        .exec()
        .then(users => users.map(normalizeUser))
}

export const fetchUserByEmail = (email: string): Promise<User | null> => {
    return UserModel.findOne({ email })
        .exec()
        .then(user => {
            if (user) return user
            return null
        })
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const fetchUserById = (id: string): Promise<UserResponse | null> => {
    return UserModel.findById(id)
        .exec()
        .then(user => {
            if (user) return normalizeUser(user)
            return null
        })
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const updateUserById = (id: string, payload: Partial<UserRequest>): Promise<UserResponse | null> => {
    return UserModel.findByIdAndUpdate(id, payload)
        .exec()
        .then(() => fetchUserById(id))
        .catch(error => {
            throw new RequestError(error.message)
        })
}

export const createUser = async (user: UserRequest): Promise<UserResponse> => {
    return new UserModel(user)
        .save()
        .then(normalizeUser)
        .catch(error => {
            throw new RequestError(error.message)
        })
}
