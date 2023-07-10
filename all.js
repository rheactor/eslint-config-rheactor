module.exports = {
  extends: [
    "./eslint",
    "./import",
    "./next",
    "./promise",
    "./react",
    "./regexp",
    "./tailwind",
    "./typescript",
    "./unicorn",
    "./unused-imports",
  ],

  env: {
    es6: true,
    node: true,
    browser: true,
  },
};
