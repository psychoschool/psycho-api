import debugLib from 'debug'
import { getEnvVars } from 'src/utils'

const debug = getEnvVars('DEBUG')
if (debug) debugLib.enable('APP:*')
else debugLib.disable()

export const getDebugger = (debugLabel: string) => debugLib(`APP:${debugLabel}`)
