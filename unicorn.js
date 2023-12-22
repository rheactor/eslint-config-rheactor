module.exports = {
  plugins: ["unicorn"],
  extends: ["plugin:unicorn/recommended"],

  rules: {
    "unicorn/better-regex": "off", // regexp conflict
    "unicorn/catch-error-name": "off",
    "unicorn/filename-case": "off",
    "unicorn/no-await-expression-member": "off",
    "unicorn/no-empty-file": "off", // bug
    "unicorn/no-nested-ternary": "off", // prettier conflict
    "unicorn/no-null": "off",
    "unicorn/no-useless-undefined": ["error", { checkArguments: false }],
    "unicorn/number-literal-case": "off", // prettier conflict
    "unicorn/prevent-abbreviations": "off",
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
