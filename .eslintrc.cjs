module.exports = {
    env: {
      es2021: true,
      node: true
    },
    extends: [
      'airbnb-base'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'comma-dangle': ['error', 'never']
      // 'linebreak-style': ['error', 'windows']
    }
  };
  