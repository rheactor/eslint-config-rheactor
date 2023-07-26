module.exports = {
  extends: [
    "./eslint",
    "./import",
    "./jest",
    "./promise",
    "./regexp",
    "./typescript",
    "./unicorn",
    "./unused-imports",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
  },

  env: {
    es6: true,
    node: true,
    "jest/globals": true,
  },
};
