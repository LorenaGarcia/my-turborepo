# AI Agents Guide - My Turborepo

Welcome! This guide is designed for AI coding assistants (like you) to understand the structure, conventions, and workflows of this monorepo. Please follow these guidelines when adding new projects, modifying code, or performing maintenance tasks.

## 🏗 Project Structure

This monorepo uses [Turborepo](https://turbo.build/repo) and npm workspaces.

- `/apps`: Contains the main applications (e.g., Next.js projects).
  - Use simple names for apps (e.g., `web`, `docs`, `admin`).
- `/packages`: Contains shared libraries, configurations, and UI components.
  - `eslint-config`: Shared ESLint configurations (`@repo/eslint-config`).
  - `typescript-config`: Shared TypeScript configurations (`@repo/typescript-config`).
  - `ui`: Shared React component library (`@repo/ui`).
  - Internal packages should be prefixed with `@repo/`.

## 🛠 Tech Stack

- **Framework**: Next.js (mostly)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Tooling**: Turborepo, ESLint, Prettier
- **Package Manager**: npm

## 🚀 Common Workflows

### Running Tasks
Run these from the root directory:
- `npm run dev`: Starts development servers (parallel).
- `npm run build`: Builds all projects.
- `npm run lint`: Lints the entire monorepo.
- `npm run format`: Formats code with Prettier.
- `npm run check-types`: Validates TypeScript types.

### Adding a New App

1. Create a directory in `/apps/your-app-name`.
2. Initialize `package.json`:
   - Name: `your-app-name`
   - Dependencies: Use `"@repo/ui": "*"` for internal packages.
   - DevDependencies: Include `@repo/eslint-config` and `@repo/typescript-config`.
3. Configure `tsconfig.json` to extend `@repo/typescript-config/nextjs.json`.
4. Configure `eslint.config.mjs` to use `@repo/eslint-config/nextjs.mjs`.

### Adding a New Shared Package

1. Create a directory in `/packages/your-pkg-name`.
2. Initialize `package.json`:
   - Name: `@repo/your-pkg-name`
   - Version: `0.0.0`
3. Export functionality via `src/index.ts` (or equivalent).

## 📏 Coding Standards

- **Internal Deps**: Always use `"*"` version for internal `@repo/` packages to ensure they stay in sync.
- **TypeScript**: Always use the shared base configs.
- **Styling**: Use the existing UI components from `@repo/ui` whenever possible.
- **Naming**: Use kebab-case for directory names.

## 🤖 Instructions for AI Agents

1. **Reusability**: If you find yourself writing the same utility in multiple apps, move it to a new package in `/packages`.
2. **Consistency Check**: Before creating a new component, check `/packages/ui/src` to see if it already exists or if it should be added there.
3. **Turbo-Aware**: Use `turbo` via `npm run <task>` to benefit from caching and parallel execution.
4. **Environment**: Check for `.env.example` files when working on apps to understand required environment variables.

---
*Created by Antigravity AI Assistant*
