import { join } from 'path'
import { rootDir } from './env'

export const alias = {
    src: join(rootDir, 'src'),
    app: join(rootDir, 'src/app'),
    assets: join(rootDir, 'src/assets'),
    utils: join(rootDir, 'src/utils'),
    config: join(rootDir, 'config')
}
