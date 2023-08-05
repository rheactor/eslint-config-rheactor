module.exports = {
  extends: [
    "./eslint",
    "./import",
    "./vitest",
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
  },
};
