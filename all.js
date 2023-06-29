module.exports = {
  extends: [
    "./eslint",
    "./react",
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
