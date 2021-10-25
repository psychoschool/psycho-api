import { join } from 'path'

import { rootDir } from '../utils/env'

export const babelLoader = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
        configFile: join(rootDir, '.babelrc')
    }
}
