module.exports = {
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'linebreak-style': 'off',
    'consistent-return': 'off',
    'no-restricted-exports': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  env: {
    node: true,
    jest: true,
    es2021: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules', 'dist', 'coverage', '**/*.d.ts', '**/*.js'],
};