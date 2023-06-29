module.exports = {
  extends: ["plugin:unicorn/recommended"],
  plugins: ["unicorn"],
  rules: {
    "unicorn/filename-case": [
      "error",
      {
        case: "pascalCase",
        ignore: ["^use[A-Z]", "^(page|layout).tsx*"],
      },
    ],
  },
};
