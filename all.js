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
    node: true,
    browser: true,
  },
};
