module.exports = {
  settings: {
    jest: { version: 29 },
  },

  overrides: [
    {
      files: ["**/*.test.{ts,tsx}"],
      plugins: ["jest"],
      extends: ["plugin:jest/all"],
      rules: {
        "jest/prefer-expect-assertions": [
          "error",
          { onlyFunctionsWithAsyncKeyword: true },
        ],
        "jest/no-conditional-expect": "off",
        "jest/no-conditional-in-test": "off",
        "jest/no-done-callback": "off",
        "jest/no-identical-title": "off",
        "jest/valid-expect": "off",
        "jest/max-expects": "off",
        "jest/require-top-level-describe": "off",
      },
    },
  ],
};
