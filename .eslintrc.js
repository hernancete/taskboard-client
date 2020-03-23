module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ["error", 2],
    'max-len': ["warn", {"code": 100}],
    'brace-style': ["error", "stroustrup", { "allowSingleLine": true }],
    'no-unused-vars': "warn",
    'comma-spacing': "warn",
    'eqeqeq': "warn",
  },
};
