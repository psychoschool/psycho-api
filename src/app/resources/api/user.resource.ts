import { normalizeUser, UserModel } from 'app/resources/schemas'
import type { UserRequest } from 'app/resources/types'

export const fetchUsers = () => UserModel.find().then(users => users.map(normalizeUser))

export const fetchUserByEmail = (email: string) => UserModel.findOne({ email })

export const fetchUserById = (id: string) => UserModel.findById(id).then(user => user && normalizeUser(user))

export const updateUserById = (id: string, payload: Partial<UserRequest>) =>
    UserModel.findByIdAndUpdate(id, payload).then(() => fetchUserById(id))

export const createUser = async (user: UserRequest) => new UserModel(user).save().then(normalizeUser)
