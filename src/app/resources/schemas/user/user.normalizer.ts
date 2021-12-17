import { User, UserResponse } from 'app/resources/types'

export const normalizeUser = (user: User): UserResponse => ({
    id: user.id,
    phone: user.phone,
    email: user.email,
    firstName: user.firstName,
    role: user.role
})
