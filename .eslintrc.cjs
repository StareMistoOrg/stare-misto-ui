module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    'arrow-body-style': ['error', 'as-needed'],
    'semi': ['error', 'always'],
    'max-len': ['error', { 'code': 120 }],


    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],

    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    'indent': 'off',
    '@typescript-eslint/indent': ["error", 2, { "MemberExpression": 1 }],

  },
}
