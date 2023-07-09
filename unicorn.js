module.exports = {
  plugins: ["unicorn"],
  extends: ["plugin:unicorn/recommended"],

  rules: {
    "unicorn/number-literal-case": "off", // prettier conflict
    "unicorn/no-nested-ternary": "off", // prettier conflict
    "unicorn/better-regex": "off", // regexp conflict
    "unicorn/no-null": "off",
    "unicorn/filename-case": ["error", { case: "kebabCase" }],
  },

  overrides: [
    {
      files: "*.d.ts",
      rules: {
        "unicorn/filename-case": "off",
        "unicorn/prevent-abbreviations": "off",
      },
    },
    {
      files: "*.{js,ts}",
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
    {
      files: "**/*{Component,Service,Context,Model}.{js,jsx,ts,tsx}",
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "pascalCase",
            ignore: ["^DOM"],
          },
        ],
      },
    },
  ],
};
