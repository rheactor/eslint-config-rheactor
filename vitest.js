module.exports = {
  plugins: ["vitest"],

  overrides: [
    {
      files: "./**/*.test.ts",
      extends: ["plugin:vitest/all"],
      rules: {
        "vitest/require-top-level-describe": "off",
        "vitest/no-conditional-expect": "off",
        "vitest/max-expects": "off",
        "vitest/no-conditional-in-test": "off",
        "vitest/no-conditional-tests": "off",
      },
    },
  ],
};
