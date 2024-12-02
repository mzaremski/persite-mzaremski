import { useRouteLoaderData } from "@remix-run/react";

export default function Footer() {
  const { host } = useRouteLoaderData('root') as {host: string}; // TODO: Fix type

  return (
    <div style={{ width: '100%', textAlign: 'center', fontSize: '0.9rem', paddingBottom: '1rem' }}>
      Get one for you – <a href={`https://mzaremski.com/persite?utm_source=${host}`}>PerSite</a>
    </div>
  );
}
