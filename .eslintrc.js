module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
    "no-plusplus": "off",
  },
  "overrides": [
    {
      "files": ["*-test.js","*.spec.js"],
      "rules": {
        "no-unused-expressions": "off",
        "func-names": "off",
      }
    }
  ],
};
