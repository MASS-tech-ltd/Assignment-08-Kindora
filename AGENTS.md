<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

Single Next.js 16 App Router app (not a monorepo). All source lives in `src/`:
`src/app/` (routes + `globals.css`), `src/components/ui/` (shadcn components), `src/lib/`.

- **Use npm** — `package-lock.json` is the lockfile. Ignore the README's yarn/pnpm/bun suggestions; that's unedited create-next-app boilerplate.
- No env vars are required: nothing in `src/` reads `process.env`, and there is no `.env` file.

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build
- `npm run lint` — ESLint flat config (`eslint.config.mjs`)
- There is **no test script and no typecheck script**. Typecheck with `npx tsc --noEmit`.
- There is no CI. Verify changes with: `npm run lint && npx tsc --noEmit && npm run build`

## Toolchain quirks (differ from defaults)

- **React Compiler is on** (`reactCompiler: true` in `next.config.ts`). Do not add `useMemo`/`useCallback`/`React.memo`.
- **Tailwind v4 is CSS-first**: there is no `tailwind.config.*`. Theme tokens live in `src/app/globals.css` (`@theme inline`, `@custom-variant dark`). CSS is compiled through the `@tailwindcss/turbopack` loader rule in `next.config.ts` — don't add a PostCSS/Tailwind config file.
- **shadcn uses style `base-nova`** (`components.json`): UI primitives are `@base-ui/react`, **not Radix**. Add components with `npx shadcn add <name>` and follow the existing imports in `src/components/ui/` instead of writing Radix-based code.
- `cn` is imported from the `cn` npm package (re-exported by `src/lib/utils.ts`). Components import `import { cn } from "cn"` directly — match whichever pattern the file you're editing already uses.
- Path alias `@/*` → `src/*`.
- Layout/page props use Next-generated types (e.g. `LayoutProps<"/">` in `src/app/layout.tsx`) — don't hand-write `children: React.ReactNode` prop types.
- Fonts (Poppins, Inter, Kaushan Script) are loaded in `src/app/layout.tsx` as CSS variables and wired into the Tailwind theme via `@theme inline` in `globals.css`. Adding a font means updating both files.
