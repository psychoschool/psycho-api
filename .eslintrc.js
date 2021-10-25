const path = require('path')

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    env: { node: true, mongo: true },
    extends: [
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        quotes: ['warn', 'single']
    }
}
