module.exports = {
  plugins: ["unicorn"],
  extends: ["plugin:unicorn/recommended"],

  rules: {
    "unicorn/filename-case": [
      "error",
      {
        case: "camelCase",
      },
    ],
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
      files: "**/*{Component,Service}.{js,jsx,ts,tsx}",
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "pascalCase",
          },
        ],
      },
    },
  ],
};
