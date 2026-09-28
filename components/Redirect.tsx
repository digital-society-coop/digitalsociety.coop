import type { ReactNode } from "react";

export default function Redirect({ to }: { to: string }): React.ReactNode {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Redirecting…</title>
        <link rel="canonical" href={to} />
        <meta httpEquiv="refresh" content={`0; url=${to}`} />
        <meta name="robots" content="noindex" />
      </head>
      <body>
        <a href={to}>This page has moved</a>
      </body>
    </html>
  );
}
