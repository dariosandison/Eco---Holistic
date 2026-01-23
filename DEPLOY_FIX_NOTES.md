Deploy fixes applied (to resolve Vercel build failure):
- app/recommended/page.jsx added (JSX, not TSX)
- Removed app/recommended/page.tsx if present
- Added devDependencies: typescript, @types/node, @types/react, @types/react-dom
- Upgraded Next.js to 14.2.35 (patched security release)
- Removed lockfile(s) so Vercel installs updated dependency versions

If you prefer to keep a lockfile, run `npm install` locally after unzipping and commit the generated package-lock.json.
