module.exports = {
  plugins: ["@typescript-eslint"],

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/strict",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },

  rules: {
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
    "@typescript-eslint/consistent-type-exports": [
      "warn",
      { fixMixedExportsWithInlineTypeSpecifier: false },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { fixStyle: "inline-type-imports" },
    ],
    "@typescript-eslint/default-param-last": "warn",
    "@typescript-eslint/explicit-member-accessibility": "warn",
    "@typescript-eslint/member-ordering": "warn",
    "@typescript-eslint/method-signature-style": ["warn", "method"],
    "@typescript-eslint/no-dupe-class-members": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/prefer-literal-enum-member": [
      "warn",
      { allowBitwiseExpressions: true },
    ],
    "@typescript-eslint/no-invalid-this": "warn",
    "@typescript-eslint/no-loop-func": "warn",
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    "@typescript-eslint/no-require-imports": "warn",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-unnecessary-condition": [
      "warn",
      { allowConstantLoopConditions: true },
    ],
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    // "@typescript-eslint/no-unused-vars": "off/replaced by unused-imports/no-unused-vars",
    "@typescript-eslint/no-useless-empty-export": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "@typescript-eslint/promise-function-async": "warn",
    "@typescript-eslint/require-array-sort-compare": [
      "warn",
      { ignoreStringArrays: true },
    ],
    "@typescript-eslint/return-await": "warn",
    "@typescript-eslint/sort-type-constituents": "warn",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/strict-boolean-expressions": "warn",
  },
};
