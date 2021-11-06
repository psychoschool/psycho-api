import { normalizeUser, UserModel } from 'app/resources/schemas'
import type { UserRequest } from 'app/resources/types'

export const fetchUsers = () =>
    UserModel.find()
        .exec()
        .then(users => users.map(normalizeUser))

export const fetchUserByUsername = (username: string) => UserModel.findOne({ username }).exec()

export const fetchUserById = (id: string) =>
    UserModel.findOne({ _id: id })
        .exec()
        .then(user => user && normalizeUser(user))

export const createUser = async (user: UserRequest) => new UserModel(user).save().then(normalizeUser)
