import { EnvironmentPlugin } from 'webpack'
import { debug } from '../utils/env'

const config = {
    DEBUG: debug
}

export const environmentPlugin = new EnvironmentPlugin(config)
