/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  env: {
    'vue/setup-compiler-macros': true
  },
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        trailingComma: 'none',
        printWidth: 140,
        bracketSpacing: true,
        arrowParens: 'avoid'
      }
    ]
  }
};
