# solidstart-static-hello-world-app

Minimal SolidStart app using the Nitro static preset, built with Node.js and served as static files by Zerops Nginx with SPA fallback.

## Zerops service facts

- HTTP port: `3000` (dev server) / `80` (prod nginx)
- Siblings: —
- Runtime base: `nodejs@22` (dev) / `static` (prod)

## Zerops dev

`setup: dev` idles on `zsc noop --silent`; the agent starts the dev server.

- Dev command: `npm run dev`
- In-container rebuild without deploy: `npm run build`

**All platform operations (start/stop/status/logs of the dev server, deploy, env / scaling / storage / domains) go through the Zerops development workflow via `zcp` MCP tools. Don't shell out to `zcli`.**

## Notes

- `VITE_*` env vars are baked into the static bundle at build time; use the `RUNTIME_` prefix (e.g. `VITE_APP_ENV=${RUNTIME_APP_ENV:-production}`) to forward runtime vars into the build.
- Prod deploy strips the `.output/public/` prefix so Nitro's output becomes the Nginx document root.
