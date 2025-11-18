# Copilot Instructions for eslint-config-rheactor

You are working on the `eslint-config-rheactor` project, a shared ESLint configuration package designed for modern React, TypeScript, and Next.js applications.

## Project Architecture & Principles

- **Config Format**: This project uses **ESLint Flat Config** (`eslint.config.mjs` / `rules/*.mjs`). Do not suggest legacy `.eslintrc` formats.
- **Core Stack**:
  - TypeScript (`typescript-eslint`)
  - React (`eslint-plugin-react`, `eslint-plugin-react-hooks`)
  - Next.js (`eslint-config-next`)
  - Unicorn (`eslint-plugin-unicorn`) - Used with `recommended` config but heavily customized for React/TS.
  - Stylistic (`@stylistic/eslint-plugin`) - Used for formatting rules that Prettier doesn't cover strictly (like padding).
- **Formatting**: We use **Prettier** for the heavy lifting of code formatting.
  - Do not enable ESLint rules that conflict with Prettier (e.g., `quotes`, `indent`, `max-len`).
  - Use `@stylistic` only for logical spacing (e.g., `padding-line-between-statements`) or specific style preferences not enforced by Prettier.

## Coding Standards

1.  **Rule Configuration**:
    - When adding rules, prefer "warn" over "error" for stylistic issues to avoid blocking development flow.
    - Always check if a rule is already covered by `unicorn` or `typescript-eslint` before adding a generic one.
    - Avoid deprecated rules.
2.  **Unicorn Plugin**:
    - We extend `unicorn.configs['flat/recommended']`.
    - We disable opinionated Unicorn rules that conflict with standard React patterns (e.g., `filename-case`, `prevent-abbreviations`, `no-null`).
3.  **Testing**:
    - The project uses `vitest` for testing.
    - Run linting checks to verify configuration validity.

## Workflow Instructions

**CRITICAL**: At the end of every task involving code changes, you **MUST** run the following command to verify that the ESLint configuration is valid and no rules are conflicting or undefined:

```bash
pnpm eslint
```

If this command fails, you must fix the configuration errors before considering the task complete.
