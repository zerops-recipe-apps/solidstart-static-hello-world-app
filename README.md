# SolidStart Hello World Recipe App

<!-- #ZEROPS_EXTRACT_START:intro# -->
A minimal [SolidStart](https://start.solidjs.com) application deployed as a
static site on [Zerops](https://zerops.io) — built with Node.js, served by
Nginx, with build-time environment variable injection via the `VITE_*` prefix.
Used within [SolidStart Hello World recipe](https://app.zerops.io/recipes/solidstart-hello-world) for [Zerops](https://zerops.io) platform.
<!-- #ZEROPS_EXTRACT_END:intro# -->

⬇️ **Full recipe page and deploy with one-click**

[![Deploy on Zerops](https://github.com/zeropsio/recipe-shared-assets/blob/main/deploy-button/light/deploy-button.svg)](https://app.zerops.io/recipes/solidstart-hello-world?environment=small-production)

![solidstart cover](https://github.com/zeropsio/recipe-shared-assets/blob/main/covers/svg/cover-solidstart.svg)

## Integration Guide

<!-- #ZEROPS_EXTRACT_START:integration-guide# -->

### 1. Adding `zerops.yaml`

The main application configuration file placed at the root of your repository.
It tells Zerops how to build, deploy, and run your application.

```yaml
zerops:
  # Production setup: builds optimized static assets served by Nginx.
  # Developer or CI triggers this via zcli push or git integration.
  - setup: prod
    build:
      # Build with Node.js (npm/npx), serve with Nginx.
      # The build container compiles SolidStart into static HTML/CSS/JS
      # — Node.js is NOT present at runtime.
      base: nodejs@22

      buildCommands:
        - npm ci
        # RUNTIME_ prefix exposes runtime env vars inside the build
        # container. VITE_* bakes the value into the static bundle —
        # static deployments have no runtime process to read env vars.
        - VITE_APP_ENV=${RUNTIME_APP_ENV:-production} npm run build

      # SolidStart static preset (Nitro) outputs to .output/public/.
      # The ~ strips the directory prefix so .output/public/index.html
      # becomes /index.html in the Nginx document root.
      deployFiles:
        - .output/public/~

      cache:
        - node_modules

    run:
      # Nginx serves the compiled output — no Node.js at runtime.
      base: static
      # Built-in SPA fallback: any path not matching a static file
      # is served /index.html, enabling client-side SolidStart routing.
      # No custom routing config needed.

  # Dev setup: prepares a Node.js workspace for SSH development.
  # The developer SSHs in and runs 'npm run dev' to start the dev server.
  - setup: dev
    build:
      base: nodejs@22
      os: ubuntu

      buildCommands:
        # npm install (not ci) — lock file may not exist in a fresh repo.
        - npm install

      # Deploy the full source tree so the developer has source
      # code and node_modules ready immediately on SSH.
      deployFiles: ./

      cache:
        - node_modules

    run:
      # nodejs@22 at runtime — developer needs Node.js to run
      # 'npm run dev' (vinxi dev server) via SSH.
      base: nodejs@22
      os: ubuntu
      # Keep the container alive without starting any server.
      # The developer drives the dev server manually via SSH.
      start: zsc noop --silent
```

<!-- #ZEROPS_EXTRACT_END:integration-guide# -->
