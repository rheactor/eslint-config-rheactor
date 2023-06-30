module.exports = {
  extends: [
    "./eslint",
    "./import",
    "./promise",
    "./react",
    "./reactHooks",
    "./regexp",
    "./tailwind",
    "./typescript",
    "./unicorn",
  ],

  env: {
    es6: true,
    node: true,
    browser: true,
  },
};
