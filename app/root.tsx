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
import radixStyles from "@radix-ui/themes/styles.css?url";
import FontStyles from "@fontsource/lexend/index.css?url";
import styles from "~/main.css?url";
import stylesFlyingOrbes from "~/components/Backgrounds/background-flying-orbes.css?url";
import stylesPerlinNoise from "~/components/Backgrounds/background-perlin-noise.css?url";
import stylesShootingStars from "~/components/Backgrounds/background-shooting-stars.css?url";
import stylesParallaxyStars from "~/components/Backgrounds/background-parallaxy-stars.css?url";
import Footer from "./components/Footer";

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
        {/* PERSITE_TODO_CHANGE_ME: */}
        <Theme
          appearance="dark"
          accentColor="indigo"
          grayColor="slate"
          radius="full"
          scaling="110%"
        >
          {/* PERSITE_TODO_CHANGE_ME: */}
          <Backgrounds.FlyingOrbes />

          {children}
          <Footer/>
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
    { rel: "stylesheet", href: stylesPerlinNoise },
    { rel: "stylesheet", href: stylesFlyingOrbes },
    { rel: "stylesheet", href: stylesShootingStars },
    { rel: "stylesheet", href: stylesParallaxyStars },
  ];
} 
