module.exports = {
  extends: [
    "./packages/eslint",
    "./packages/import",
    "./packages/promise",
    "./packages/regexp",
    "./packages/typescript",
    "./packages/unicorn",
    "./packages/unused-imports",
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
