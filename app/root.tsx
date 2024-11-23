import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import { Theme } from "@radix-ui/themes";
import radixStyles from "@radix-ui/themes/styles.css?url";
import styles from "~/star-parallax.css?url";
import stylesStarParallax from "~/main.css?url";
import FontStyles from "@fontsource/lexend/index.css?url";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* PERSITE_TODO_CHANGE_ME */}
        <Theme
          appearance="dark"
          accentColor="indigo"
          grayColor="slate"
          radius="full"
          scaling="110%"
          style={{ borderRadius: "var(--radius-6)" }}
        >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          {children}
          <ScrollRestoration />
          <Scripts />
          <Analytics />
        </Theme>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function links() {
  return [
    { rel: "stylesheet", href: radixStyles },
    { rel: "stylesheet", href: FontStyles },
    { rel: "stylesheet", href: stylesStarParallax },
    { rel: "stylesheet", href: styles },
  ];
} 
