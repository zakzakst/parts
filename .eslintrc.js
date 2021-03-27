module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  globals: {
    window: true,
    module: true,
    gsap: true,
  },
  parserOptions: {
    sourceType: 'module'
  },
};
