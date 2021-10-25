import { UserModel } from 'app/resources/schemas'
import type { User } from 'app/resources/types'

export const fetchUsers = () => UserModel.find()

export const createUser = async (user: User) => new UserModel(user).save()
