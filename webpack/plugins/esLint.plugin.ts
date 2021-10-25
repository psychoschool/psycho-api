import { join } from 'path'
import ESLintPlugin from 'eslint-webpack-plugin'

import { rootDir } from '../utils/env'

const config = {
    context: join(rootDir, 'src'),
    extensions: ['ts']
}

export const esLintPlugin = new ESLintPlugin(config)
