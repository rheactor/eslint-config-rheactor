import path from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import promise from "eslint-plugin-promise";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactHooksAddons from "eslint-plugin-react-hooks-addons";
import regexp from "eslint-plugin-regexp";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import ts from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
});

const nextConfigs = [];

try {
  import.meta.resolve("next");
  import.meta.resolve("eslint-config-next");
  nextConfigs.push(compat.extends("eslint-config-next/core-web-vitals"));
  nextConfigs.push(compat.extends("eslint-config-next/typescript"));
} catch {
  nextConfigs.push(reactHooks.configs["recommended-latest"]);
}

export const recommended = ts.config(
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  ts.configs.stylisticTypeChecked,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  regexp.configs["flat/recommended"],
  promise.configs["flat/recommended"],
  ...nextConfigs,

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    extends: [ts.configs.disableTypeChecked],
    files: ["**/*.{js,mjs,cjs}"],
  },

  {
    rules: {
      // `eslint` problems.
      "array-callback-return": "warn",
      "getter-return": "warn",
      "no-await-in-loop": "warn",
      "no-constructor-return": "warn",
      "no-irregular-whitespace": ["warn", { skipStrings: false }],
      "no-promise-executor-return": "warn",
      "no-self-compare": "warn",
      "no-template-curly-in-string": "warn",
      "no-unmodified-loop-condition": "warn",
      "no-unreachable-loop": "warn",
      "no-unsafe-negation": ["warn", { enforceForOrderingRelations: true }],
      "no-unsafe-optional-chaining": [
        "warn",
        { disallowArithmeticOperators: true },
      ],
      "no-useless-assignment": "warn",
      "require-atomic-updates": "warn",

      // `eslint` suggestions.
      "accessor-pairs": "warn",
      "arrow-body-style": "warn",
      "block-scoped-var": "warn",
      "class-methods-use-this": "warn",
      "consistent-this": "warn",
      curly: "warn",
      "default-case": "warn",
      "default-case-last": "warn",
      "default-param-last": "warn",
      "dot-notation": ["warn", { allowPattern: "_" }],
      eqeqeq: "warn",
      "func-names": ["warn", "never"],
      "func-style": ["warn", "declaration"],
      "grouped-accessor-pairs": ["warn", "setBeforeGet"],
      "guard-for-in": "warn",
      "id-length": ["warn", { exceptions: ["_", "x", "y", "i", "j"] }],
      "init-declarations": "warn",
      "logical-assignment-operators": [
        "warn",
        "always",
        { enforceForIfStatements: true },
      ],
      "max-classes-per-file": "warn",
      "no-alert": "warn",
      "no-array-constructor": "warn",
      "no-bitwise": ["warn", { allow: ["~"] }],
      "no-caller": "warn",
      "no-console": "warn",
      "no-div-regex": "warn",
      "no-else-return": "warn",
      "no-empty-function": "warn",
      "no-eval": ["warn", { allowIndirect: true }],
      "no-extend-native": "warn",
      "no-extra-bind": "warn",
      "no-extra-label": "warn",
      "no-implicit-coercion": ["warn", { disallowTemplateShorthand: true }],
      "no-implied-eval": "warn",
      "no-label-var": "warn",
      "no-lone-blocks": "warn",
      "no-lonely-if": "warn",
      "no-loop-func": "warn",
      "no-multi-assign": "warn",
      "no-multi-str": "warn",
      "no-negated-condition": "warn",
      "no-new": "warn",
      "no-new-func": "warn",
      "no-new-wrappers": "warn",
      "no-nonoctal-decimal-escape": "warn",
      "no-object-constructor": "warn",
      "no-octal-escape": "warn",
      "no-param-reassign": ["warn", { props: true }],
      "no-proto": "warn",
      "no-return-assign": "warn",
      "no-script-url": "warn",
      "no-sequences": "warn",
      "no-shadow": "warn",
      "no-throw-literal": "warn",
      "no-underscore-dangle": ["warn", { allow: ["_id"] }],
      "no-unneeded-ternary": "warn",
      "no-unused-expressions": ["warn", { enforceForJSX: true }],
      "no-unused-labels": "warn",
      "no-useless-call": "warn",
      "no-useless-computed-key": "warn",
      "no-useless-concat": "warn",
      "no-useless-constructor": "warn",
      "no-useless-rename": "warn",
      "no-useless-return": "warn",
      "no-var": "warn",
      "no-void": ["warn", { allowAsStatement: true }],
      "no-warning-comments": ["warn", { decoration: ["*"] }],
      "object-shorthand": ["warn", "always", { avoidQuotes: true }],
      "one-var": ["warn", "never"],
      "operator-assignment": "warn",
      "prefer-arrow-callback": "warn",
      "prefer-const": "warn",
      "prefer-exponentiation-operator": "warn",
      "prefer-named-capture-group": "warn",
      "prefer-numeric-literals": "warn",
      "prefer-object-has-own": "warn",
      "prefer-object-spread": "warn",
      "prefer-promise-reject-errors": "warn",
      "prefer-regex-literals": ["warn", { disallowRedundantWrapping: true }],
      "prefer-rest-params": "warn",
      "prefer-spread": "warn",
      "prefer-template": "warn",
      quotes: [
        "warn",
        "double",
        { avoidEscape: true, allowTemplateLiterals: false },
      ],
      radix: "warn",
      "symbol-description": "warn",
      "unicode-bom": "warn",
      yoda: "warn",
    },
  },

  {
    files: ["**/*.{ts,tsx}"],
    plugins: { stylistic },

    rules: {
      "padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: "block-like", next: "*" },
        { blankLine: "always", prev: "class", next: "*" },
        { blankLine: "always", prev: "directive", next: "*" },
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "any", prev: "import", next: "import" },
      ],
    },
  },

  {
    plugins: { importPlugin },

    files: ["**/*.{ts,tsx}"],

    rules: {
      // `eslint` disables.
      "class-methods-use-this": "off",
      "default-param-last": "off",
      "dot-notation": "off",
      "init-declarations": "off",
      "no-array-constructor": "off",
      "no-empty-function": "off",
      "no-implied-eval": "off",
      "no-loop-func": "off",
      "no-loss-of-precision": "off",
      "no-redeclare": "off",
      "no-return-await": "off",
      "no-shadow": "off",
      "no-useless-constructor": "off",
      "prefer-promise-reject-errors": "off",

      // `import` disables.
      "importPlugin/no-duplicates": "off",

      // `typescript` disables.
      "@typescript-eslint/no-unused-vars": "off",

      // `typescript` rules.
      "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
      "@typescript-eslint/class-methods-use-this": "warn",
      "@typescript-eslint/consistent-type-exports": "warn",
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/default-param-last": "warn",
      "@typescript-eslint/dot-notation": ["warn", { allowPattern: "_" }],
      "@typescript-eslint/explicit-member-accessibility": "warn",
      "@typescript-eslint/init-declarations": "warn",
      "@typescript-eslint/member-ordering": "warn",
      "@typescript-eslint/method-signature-style": ["warn", "method"],
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          format: ["UPPER_CASE"],
          selector: "enumMember",
        },
        {
          format: ["camelCase", "UPPER_CASE"],
          selector: "variable",
        },
        {
          format: ["PascalCase"],
          selector: "typeLike",
        },
        {
          format: ["camelCase", "PascalCase"],
          selector: "function",
        },
      ],
      "@typescript-eslint/no-confusing-void-expression": "warn",
      "@typescript-eslint/no-dynamic-delete": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-extraneous-class": "warn",
      "@typescript-eslint/no-import-type-side-effects": "warn",
      "@typescript-eslint/no-invalid-void-type": [
        "warn",
        { allowAsThisParameter: true },
      ],
      "@typescript-eslint/no-loop-func": "warn",
      "@typescript-eslint/no-loss-of-precision": "warn",
      "@typescript-eslint/no-meaningless-void-operator": "warn",
      "@typescript-eslint/no-mixed-enums": "warn",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
      "@typescript-eslint/no-shadow": "warn",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
      "@typescript-eslint/no-unnecessary-condition": [
        "warn",
        { allowConstantLoopConditions: true },
      ],
      "@typescript-eslint/no-unnecessary-parameter-property-assignment": "warn",
      "@typescript-eslint/no-unnecessary-qualifier": "warn",
      "@typescript-eslint/no-unnecessary-template-expression": "warn",
      "@typescript-eslint/no-unnecessary-type-arguments": "warn",
      "@typescript-eslint/no-useless-constructor": "warn",
      "@typescript-eslint/no-useless-empty-export": "warn",
      "@typescript-eslint/prefer-literal-enum-member": "warn",
      "@typescript-eslint/prefer-readonly": "warn",
      "@typescript-eslint/prefer-reduce-type-parameter": "warn",
      "@typescript-eslint/prefer-return-this-type": "warn",
      "@typescript-eslint/promise-function-async": "warn",
      "@typescript-eslint/related-getter-setter-pairs": "warn",
      "@typescript-eslint/require-array-sort-compare": "warn",
      "@typescript-eslint/return-await": "warn",
      "@typescript-eslint/sort-type-constituents": "warn",
      "@typescript-eslint/strict-boolean-expressions": "warn",
      "@typescript-eslint/switch-exhaustiveness-check": "warn",
      "@typescript-eslint/use-unknown-in-catch-callback-variable": "warn",
    },
  },

  {
    files: ["**/*.tsx"],
    plugins: { react },

    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },

    rules: {
      "react/button-has-type": "warn",
      "react/checked-requires-onchange-or-readonly": "warn",
      "react/destructuring-assignment": "warn",
      "react/function-component-definition": "warn",
      "react/hook-use-state": "warn",
      "react/iframe-missing-sandbox": "warn",
      "react/jsx-boolean-value": "warn",
      "react/jsx-child-element-spacing": "warn",
      "react/jsx-curly-brace-presence": "warn",
      "react/jsx-fragments": "warn",
      "react/jsx-handler-names": "warn",
      "react/jsx-key": [
        "warn",
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      "react/jsx-newline": "warn",
      "react/jsx-no-constructed-context-values": "warn",
      "react/jsx-no-script-url": "warn",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-pascal-case": "warn",
      "react/jsx-props-no-spread-multi": "warn",
      "react/no-array-index-key": "warn",
      "react/no-danger": "warn",
      "react/no-multi-comp": ["warn", { ignoreStateless: true }],
      "react/no-namespace": "warn",
      "react/no-this-in-sfc": "warn",
      "react/no-unstable-nested-components": "warn",
      "react/self-closing-comp": "warn",
      "react/void-dom-elements-no-children": "warn",
    },
  },

  {
    files: ["**/*.tsx"],
    plugins: { "react-hooks-addons": reactHooksAddons },

    rules: {
      "react-hooks-addons/no-unused-deps": ["warn", { effectComment: "keep" }],
    },
  },

  {
    plugins: { importPlugin },

    settings: {
      "importPlugin/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "importPlugin/resolver": {
        typescript: { project: "./tsconfig.json" },
        node: true,
      },
    },

    rules: {
      "importPlugin/consistent-type-specifier-style": [
        "warn",
        "prefer-top-level",
      ],
      "importPlugin/first": "warn",
      "importPlugin/newline-after-import": "warn",
      "importPlugin/no-absolute-path": "warn",
      "importPlugin/no-anonymous-default-export": "warn",
      "importPlugin/no-dynamic-require": "warn",
      "importPlugin/no-empty-named-blocks": "warn",
      "importPlugin/no-extraneous-dependencies": "warn",
      "importPlugin/no-import-module-exports": "warn",
      "importPlugin/no-mutable-exports": "warn",
      "importPlugin/no-named-default": "warn",
      "importPlugin/no-namespace": "warn",
      "importPlugin/no-relative-packages": "warn",
      "importPlugin/no-unassigned-import": [
        "warn",
        { allow: ["**/*.{css,scss,json}"] },
      ],
      "importPlugin/no-unused-modules": "warn",
      "importPlugin/no-useless-path-segments": "warn",
      "importPlugin/order": [
        "warn",
        {
          alphabetize: {
            caseInsensitive: true,
            order: "asc",
            orderImportKind: "asc",
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
          "newlines-between": "always",
          pathGroups: [
            {
              group: "external",
              pattern: "**/*.{css,scss}",
              position: "after",
            },
            {
              group: "external",
              pattern: "**/*.{js,ts}",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          warnOnUnassignedImports: true,
        },
      ],
      "importPlugin/unambiguous": "warn",
      "no-restricted-imports": ["error", { patterns: ["./*", "../*"] }],
    },
  },

  {
    files: ["**/*.{ts,tsx}"],

    rules: {
      "regexp/hexadecimal-escape": "warn",
      "regexp/letter-case": "warn",
      "regexp/prefer-escape-replacement-dollar-char": "warn",
      "regexp/prefer-lookaround": "warn",
      "regexp/prefer-named-backreference": "warn",
      "regexp/prefer-named-capture-group": "warn",
      "regexp/prefer-named-replacement": "warn",
      "regexp/prefer-regexp-test": "warn",
      "regexp/prefer-result-array-groups": "warn",
      "regexp/sort-alternatives": "warn",
      "regexp/sort-character-class-elements": "warn",
      "regexp/unicode-escape": "warn",
      "regexp/unicode-property": "warn",
    },
  },

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { globals: globals.builtin },
    plugins: { unicorn },
    rules: {
      "unicorn/better-regex": "off",
      "unicorn/catch-error-name": "off",
      "unicorn/filename-case": "off",
      "unicorn/import-style": "off",
      "unicorn/no-await-expression-member": "off",
      "unicorn/no-empty-file": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/no-null": "off",
      "unicorn/no-unreadable-array-destructuring": "off",
      "unicorn/number-literal-case": "off",
      "unicorn/prefer-string-raw": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },

  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "promise/always-return": ["warn", { ignoreLastCallback: true }],
      "promise/no-nesting": "off",
    },
  },

  {
    files: ["**/*.{ts,tsx}"],
    plugins: { "unused-imports": unusedImports },
    rules: {
      // `eslint` disables.
      "no-unused-vars": "off",

      // `unused-imports` rules.
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
);

export default recommended;
