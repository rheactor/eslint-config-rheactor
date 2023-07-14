module.exports = {
  settings: {
    jest: { version: 29 },
  },

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
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
