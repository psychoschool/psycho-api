import { DefinePlugin } from 'webpack'

import { isDev, isProd } from '../utils/env'

const config = {
    IS_DEV: isDev,
    IS_PROD: isProd
}

export const definePlugin = new DefinePlugin(config)
