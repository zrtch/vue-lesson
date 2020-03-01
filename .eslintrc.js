module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'generator-star-spacing': 'off',
    'space-before-function-paren': 0,
    'no-multi-spaces': 0,
    indent: 0,
    'eol-last': 0,
    'new-cap': 0,
    'no-unused-vars': 0
  }
}
