module.exports = {
  extends: [
    "./eslint",
    "./import",
    "./vitest",
    "./next",
    "./promise",
    "./react",
    "./regexp",
    "./tailwind",
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
    browser: true,
  },
};
