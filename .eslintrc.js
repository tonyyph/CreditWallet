module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
  },
  plugins: ['@momo-platform/momo', 'react-hooks'],
  extends: ['plugin:@momo-platform/momo/all'],
  rules: {
    // 'no-undef': 2,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  globals: {_: true, __DEV__: true, alert: true, fetch: true, fs: true},
};
