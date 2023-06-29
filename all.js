module.exports = {
  extends: [
    "./eslint",
    "./react",
    "./reactHooks",
    "./import",
    "./typescript",
    "./unicorn",
    "./compat",
  ],

  env: {
    node: true,
    browser: true,
  },
};
