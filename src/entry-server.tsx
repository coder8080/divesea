// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            type="image/png"
            href="/divesea/favicon/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/divesea/favicon/favicon.svg"
          />
          <link rel="shortcut icon" href="/divesea/favicon/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/divesea/favicon/apple-touch-icon.png"
          />
          <meta name="apple-mobile-web-app-title" content="DiveSea" />
          <link rel="manifest" href="/divesea/favicon/site.webmanifest" />
          <meta name="theme-color" content="#ffffff" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
