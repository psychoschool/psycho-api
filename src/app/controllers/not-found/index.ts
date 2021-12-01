import { NotFoundError } from 'app/errors'

export const notFound = () => {
    throw new NotFoundError()
}
