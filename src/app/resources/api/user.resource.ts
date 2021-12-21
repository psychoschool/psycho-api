import { normalizeUser, UserModel } from 'app/resources/schemas'
import type { UserRequest } from 'app/resources/types'
import { RequestError } from 'app/errors'

export const fetchUsers = () => UserModel.find().then(users => users.map(normalizeUser))

export const fetchUserByEmail = (email: string) =>
    UserModel.findOne({ email })
        .then(user => user)
        .catch(error => {
            throw new RequestError(error.message)
        })

export const fetchUserById = (id: string) =>
    UserModel.findById(id)
        .then(user => user && normalizeUser(user))
        .catch(error => {
            throw new RequestError(error.message)
        })

export const updateUserById = (id: string, payload: Partial<UserRequest>) =>
    UserModel.findByIdAndUpdate(id, payload)
        .then(() => fetchUserById(id))
        .catch(error => {
            throw new RequestError(error.message)
        })

export const createUser = async (user: UserRequest) =>
    new UserModel(user)
        .save()
        .then(normalizeUser)
        .catch(error => {
            throw new RequestError(error.message)
        })
