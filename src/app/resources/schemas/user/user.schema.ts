import { Schema, model } from 'mongoose'
import type { User, UserModal } from 'app/resources/types'
import { UserRequest } from 'app/resources/types'

const UserSchema = new Schema<User>(
    {
        firstName: String,
        email: { type: String, required: [true, 'email is required'] },
        password: { type: String, required: [true, 'password is required'] },
        role: { type: String, default: 'student' },
        phone: { type: Number, required: [true, 'phone is required'] }
    },
    {
        toJSON: {
            versionKey: false,
            transform(doc, ret) {
                ret.id = ret._id

                delete ret._id
                delete ret.password
            }
        }
    }
)
UserSchema.statics.build = (params: UserRequest) => new UserModel(params)

export const UserModel = model<User, UserModal>('users', UserSchema)
