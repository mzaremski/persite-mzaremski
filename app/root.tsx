import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import { Theme } from "@radix-ui/themes";
import * as Backgrounds from "./components/Backgrounds/Backgrounds";
// Styles
import radixStyles from "@radix-ui/themes/styles.css?url";
import FontStyles from "@fontsource/lexend/index.css?url";
import styles from "~/main.css?url";
import stylesStarParallax from "~/components/Backgrounds/background-star-parallax.css?url";
import stylesPerlinNoise from "~/components/Backgrounds/background-perlin-noise.css?url";

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
          {/* PERSITE_TODO_CHANGE_ME */}
          <Backgrounds.PerlinNoise />

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
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: stylesStarParallax },
    { rel: "stylesheet", href: stylesPerlinNoise },
  ];
} 
