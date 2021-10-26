import { UserModel } from 'app/resources/schemas'
import type { User, UserRequest, UserResponse } from 'app/resources/types'

export const fetchUsers = () =>
    UserModel.find()
        .exec()
        .then(
            users =>
                users.map(user => ({
                    id: user.id,
                    phone: user.phone,
                    email: user.email,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName
                })) as Array<UserResponse>
        )

export const fetchUserByUsername = (username: string) =>
    UserModel.findOne({ username })
        .exec()
        .then(
            user =>
                user &&
                ({
                    id: user.id,
                    phone: user.phone,
                    email: user.email,
                    password: user.password,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName
                } as User)
        )

export const createUser = async (user: UserRequest) =>
    new UserModel(user).save().then(
        user =>
            ({
                id: user.id,
                phone: user.phone,
                email: user.email,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName
            } as UserResponse)
    )
