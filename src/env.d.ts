/// <reference types="vite/client" />

// Injected via app.config.ts vite.define — available in all source files.
declare const __BUILD_TIME__: string;
declare const __SOLID_VERSION__: string;
declare const __SOLID_START_VERSION__: string;

interface ImportMetaEnv {
  // Set at build time via VITE_APP_ENV shell variable in zerops.yaml.
  // Reads RUNTIME_APP_ENV from the service's runtime environment.
  readonly VITE_APP_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
