import { defineConfig } from "@solidjs/start/config";
import { readFileSync } from "node:fs";

function readPkgVersion(pkg: string): string {
  const json = readFileSync(`./node_modules/${pkg}/package.json`, "utf-8");
  return (JSON.parse(json) as { version: string }).version;
}

export default defineConfig({
  // Pure client-side SPA output — Nginx serves .output/public/ with
  // SPA fallback. Avoids SSR hydration issues on static hosting.
  ssr: false,
  server: {
    // Static preset: Nitro outputs pre-rendered HTML/CSS/JS to
    // .output/public/ — no server process runs at runtime.
    preset: "static",
  },
  vite: {
    define: {
      // Injected at build time — not available as runtime values.
      __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
      __SOLID_VERSION__: JSON.stringify(readPkgVersion("solid-js")),
      __SOLID_START_VERSION__: JSON.stringify(readPkgVersion("@solidjs/start")),
    },
  },
});
