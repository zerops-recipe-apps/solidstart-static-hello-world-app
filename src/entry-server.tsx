import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>SolidStart — Hello from Zerops!</title>
          {assets}
        </head>
        <body>
          <div id="static-shell">
            <main
              style={{
                "font-family": "system-ui, sans-serif",
                "min-height": "100dvh",
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                padding: "1.5rem",
                background: "#0f0f13",
                color: "#e8e8f0",
              }}
            >
              <div
                style={{
                  background: "#1a1a24",
                  border: "1px solid #2a2a3a",
                  "border-radius": "16px",
                  padding: "2.5rem 3rem",
                  "max-width": "520px",
                  width: "100%",
                }}
              >
                <h1 style={{ "font-size": "2rem", "margin-bottom": "0.3rem" }}>
                  Hello from Zerops!
                </h1>
                <p style={{ color: "#8888aa", "margin-bottom": "0" }}>
                  SolidStart static deployment
                </p>
              </div>
            </main>
          </div>
          <noscript>
            <style>{`#static-shell { display: block !important; }`}</style>
          </noscript>
          <div id="root">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
