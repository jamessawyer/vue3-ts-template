/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  root: true,
  extends: [
    // 'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    // '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'no-console': OFF,
    'no-var': WARN,
    'prefer-const': ERROR,
  },
}
