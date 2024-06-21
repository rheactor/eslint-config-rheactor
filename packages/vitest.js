module.exports = {
  plugins: ["vitest"],

  overrides: [
    {
      files: "./**/*.test.ts",
      extends: ["plugin:vitest/all"],
      rules: {
        "vitest/max-expects": "off",
        "vitest/no-conditional-expect": "off",
        "vitest/no-conditional-in-test": "off",
        "vitest/no-conditional-tests": "off",
        "vitest/no-hooks": "off",
        "vitest/prefer-expect-assertions": [
          "warn",
          {
            onlyFunctionsWithAsyncKeyword: true,
            onlyFunctionsWithExpectInLoop: true,
            onlyFunctionsWithExpectInCallback: true,
          },
        ],
        "vitest/require-top-level-describe": "off",
      },
    },
  ],
};
