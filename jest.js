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
      },
    },
  ],
};
