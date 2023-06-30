module.exports = {
  extends: [
    "./eslint",
    "./react",
    "./reactHooks",
    "./import",
    "./typescript",
    "./unicorn",
    "./compat",
    "./promise",
    "./tailwind",
    "./regexp",
  ],

  env: {
    es6: true,
    node: true,
    browser: true,
  },
};
