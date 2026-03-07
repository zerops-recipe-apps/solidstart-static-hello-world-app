export default function Home() {
  // VITE_APP_ENV is baked into the bundle at build time.
  // Set via VITE_APP_ENV=${RUNTIME_APP_ENV:-production} in zerops.yaml
  // buildCommands — no runtime process reads this variable.
  const appEnv = import.meta.env.VITE_APP_ENV || "development";

  return (
    <main>
      <div class="card">
        <div class="badge">
          <span class="badge-dot" />
          SolidStart · Static
        </div>

        <h1>Hello from Zerops!</h1>
        <p class="subtitle">
          SolidStart v{__SOLID_START_VERSION__} · Solid.js v{__SOLID_VERSION__}
        </p>

        <div class="divider" />

        <div class="meta-grid">
          <div class="meta-row">
            <span class="meta-label">Environment</span>
            <span class="meta-value green">{appEnv}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">Built at</span>
            <span class="meta-value">{__BUILD_TIME__}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">Runtime</span>
            <span class="meta-value">Nginx (static)</span>
          </div>
        </div>

        <div class="divider" />

        <div class="footer">
          Deployed on{" "}
          <a href="https://zerops.io" target="_blank" rel="noopener noreferrer">
            Zerops
          </a>
        </div>
      </div>
    </main>
  );
}
