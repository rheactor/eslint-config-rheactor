module.exports = {
  plugins: ["unicorn"],
  extends: ["plugin:unicorn/recommended"],

  rules: {
    "unicorn/no-empty-file": "off", // bug
    "unicorn/number-literal-case": "off", // prettier conflict
    "unicorn/no-nested-ternary": "off", // prettier conflict
    "unicorn/better-regex": "off", // regexp conflict
    "unicorn/no-null": "off",
    "unicorn/filename-case": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-await-expression-member": "off",
  },

  overrides: [
    {
      files: "*.{js,ts}",
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
  ],
};
