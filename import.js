module.exports = {
  plugins: ["import"],

  rules: {
    "import/consistent-type-specifier-style": ["error", "prefer-inline"],
    // "import/default": "off",
    // "import/dynamic-import-chunkname": "off",
    "import/export": "error",
    // "import/exports-last": "off",
    "import/extensions": [
      "error",
      "always",
      {
        ignorePackages: true,
        pattern: {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      },
    ],
    // "import/first": "off",
    // "import/group-exports": "off",
    // "import/max-dependencies": "off",
    // "import/named": "error",
    // "import/namespace": "off",
    "import/newline-after-import": "warn",
    "import/no-absolute-path": "error",
    // "import/no-amd": "off",
    "import/no-anonymous-default-export": "error",
    // "import/no-commonjs": "off",
    // "import/no-cycle": "off",
    "import/no-default-export": "error",
    "import/no-deprecated": "warn",
    "import/no-duplicates": "error",
    // "import/no-dynamic-require": "off",
    "import/no-empty-named-blocks": "warn",
    "import/no-extraneous-dependencies": "warn",
    // "import/no-import-module-exports": "off",
    // "import/no-internal-modules": "off",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default-member": "warn",
    "import/no-named-as-default": "warn",
    // "import/no-named-default": "off",
    // "import/no-named-export": "off",
    "import/no-namespace": "warn",
    // "import/no-nodejs-modules": "off",
    "import/no-relative-packages": "warn",
    // "import/no-relative-parent-imports": "off",
    // "import/no-restricted-paths": "off",
    "import/no-self-import": "error",
    "import/no-unassigned-import": [
      "error",
      {
        allow: ["**/*.{css,scss,json}"],
      },
    ],
    "import/no-unresolved": "warn",
    "import/no-unused-modules": [
      "error",
      {
        missingExports: true,
        unusedExports: true,
      },
    ],
    "import/no-useless-path-segments": "warn",
    "import/no-webpack-loader-syntax": "warn",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        warnOnUnassignedImports: true,
        alphabetize: {
          order: "asc",
          orderImportKind: "asc",
          caseInsensitive: true,
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "type",
          "object",
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "**/*.{css,scss}",
            group: "external",
            position: "after",
          },
          {
            pattern: "**/*.{js,ts}",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    // "import/prefer-default-export": "off",
    // "import/unambiguous": "off",
  },

  overrides: [
    {
      files: ["*.{js,ts}", "**/{page,layout,route}.{ts,tsx}"],
      rules: {
        "import/no-unused-modules": "off",
      },
    },
    {
      files: ["**/{page,layout,route}.{ts,tsx}"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
