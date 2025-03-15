import vitestPlugin from "eslint-plugin-vitest";

const vitest = [
  {
    files: ["tests/**"],
    plugins: { vitest: vitestPlugin },
    rules: {
      ...vitestPlugin.configs.all.rules,
      ...vitestPlugin.configs.recommended.rules,

      "vitest/prefer-expect-assertions": [
        "warn",
        { onlyFunctionsWithAsyncKeyword: true },
      ],
    },
    settings: { vitest: { typecheck: true } },
    languageOptions: { globals: { ...vitestPlugin.environments.env.globals } },
  },
];

export { vitest };
