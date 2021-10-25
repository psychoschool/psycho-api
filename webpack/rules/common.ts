import { babelLoader } from './loaders'

/**
 * @see https://webpack.js.org/guides/typescript/#loader
 */
export const typescriptRule = {
    test: /\.ts$/,
    use: [babelLoader, { loader: 'ts-loader', options: { transpileOnly: true } }],
    exclude: /node_modules/
}

/**
 * @see https://webpack.js.org/loaders/babel-loader
 */
export const javascriptRule = {
    test: /\.js$/,
    use: [babelLoader],
    exclude: /node_modules/
}

/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const mediasRule = {
    test: /\.(?:ico|gif|png|jpg|jpeg|ogg)$/i,
    type: 'asset/resource'
}
