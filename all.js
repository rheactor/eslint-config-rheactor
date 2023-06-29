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
  ],

  env: {
    es6: true,
    node: true,
    browser: true,
  },
};
