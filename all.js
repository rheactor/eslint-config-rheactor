module.exports = {
  extends: [
    "./eslint",
    "./react",
    "./import",
    "./typescript",
    "./unicorn",
    "./compat",
  ],

  env: {
    node: true,
    browser: true,
  },

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
      files: "*.{js,ts}",
      rules: {
        "no-undef": "off",
        "import/no-unused-modules": "off",
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
