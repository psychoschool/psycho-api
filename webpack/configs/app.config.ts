import { join } from 'path'
import nodeExternals from 'webpack-node-externals'

import * as rules from '../rules'
import * as plugins from '../plugins'
import { rootDir } from '../utils/env'
import { alias } from '../utils/alias'

const config = {
    target: 'node',
    entry: join(rootDir, 'src', 'index.ts'),
    output: {
        filename: 'js/app.js',
        libraryTarget: 'commonjs2',
        path: join(rootDir, 'dist')
    },
    module: {
        rules: [rules.typescriptRule, rules.mediasRule]
    },
    resolve: {
        alias,
        extensions: ['*', '.json', '.ts']
    },
    plugins: [plugins.definePlugin, plugins.environmentPlugin, plugins.esLintPlugin],
    externals: [nodeExternals()]
}

export default config
