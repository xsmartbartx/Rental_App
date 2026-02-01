# AI Coding Agent Instructions - Rental App

## Project Overview
**Rental-App** is a real estate rental platform built with **Next.js 16**, **React 19**, and **TypeScript**. The codebase is currently in early stage with minimal implementation beyond the create-next-app template structure.

## Architecture & Structure

### Workspace Layout
- `client/` - The main Next.js application (the only package in the monorepo)
  - `src/app/` - Next.js App Router pages and layouts
  - `public/` - Static assets
  - Configuration files: `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`

### Key Technologies
- **Framework**: Next.js 16.1.6 with App Router (not Pages Router)
- **UI**: React 19.2.3 with Tailwind CSS v4 (via @tailwindcss/postcss)
- **Styling**: Tailwind CSS v4 with PostCSS, Google Fonts (Geist)
- **Compiler**: React Compiler enabled in `next.config.ts` for automatic memoization
- **Language**: TypeScript 5 with strict mode enabled
- **Linting**: ESLint 9 with Next.js core-web-vitals and TypeScript configurations

## Developer Workflows

### Setup & Development
```bash
# Install dependencies (in client/ directory)
npm install

# Start development server
npm run dev
# Runs on http://localhost:3000 with hot reload

# Build for production
npm build

# Start production server
npm start

# Lint code
npm run lint
```

### Key Configurations to Know
- **Path aliases**: `@/*` maps to `./src/*` for clean imports across the app
- **TypeScript strict mode** is enabled - handle all potential null/undefined
- **React Compiler** is enabled - don't rely on useMemo/useCallback for optimization
- **Tailwind CSS v4** uses new PostCSS plugin syntax, not legacy config

## Code Patterns & Conventions

### File Structure Pattern
- Use the App Router pattern: pages go in `src/app/` with route segments (no pages directory)
- Layout files inherit to child routes - `layout.tsx` wraps all child pages
- Metadata is exported from layouts/pages using Next.js `Metadata` type
- Server components by default, use `'use client'` only when needed (state, hooks, events)

### Styling
- Use **Tailwind utility classes** exclusively - no separate CSS files unless absolutely necessary
- Global styles in `src/app/globals.css` (already includes @tailwind directives)
- Pattern: `className="flex items-center justify-center gap-4"` (Tailwind v4 syntax)

### TypeScript
- Strict mode is on - always provide explicit types
- Use Next.js provided types: `Metadata`, `FC`, `ReactNode`
- React 19 supports JSX without importing React
- Type imports: `import type { TypeName } from "module"`

## Integration Points & Dependencies

### External Services (Not Yet Implemented)
- Real estate backend API (assume REST endpoints for property listings, bookings)
- Authentication system (to be determined)
- Payment processing (for rental transactions)

### Current Implementation Status
- ✅ Next.js project initialized with App Router
- ✅ TypeScript & strict type checking configured
- ✅ Tailwind CSS v4 with PostCSS setup
- ✅ React Compiler enabled
- ✅ ESLint configured with Next.js standards
- ⏳ **No domain logic, API routes, or data models yet** - project is in scaffolding phase

## Guidelines for AI Agents

1. **Preserve App Router structure** - all new pages/layouts must follow the `src/app/` convention
2. **Use Server Components by default** - only add `'use client'` when strictly necessary (state, event handlers, hooks)
3. **Leverage Tailwind** - avoid CSS-in-JS or separate CSS files; use utility-first approach
4. **Follow TypeScript strict mode** - always provide explicit types; don't rely on inference for public APIs
5. **Keep imports clean** - use `@/` path alias for consistent imports across the app
6. **Consider React Compiler** - automatic memoization is enabled; avoid manual optimization
7. **Test during dev** - use `npm run dev` and verify in browser before building

## Next Steps for Development
- Create domain models for properties, users, and bookings
- Implement API routes (use Next.js `/api` routes in App Router)
- Build property listing and detail pages
- Add form components for bookings and authentication
- Integrate with backend services
