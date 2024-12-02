import { useRouteLoaderData } from "@remix-run/react";

export default function Footer() {
  const { host } = useRouteLoaderData('root') as {host: string}; // TODO: Fix type

  return (
    <div style={{ width: '100%', textAlign: 'center', fontSize: '0.9rem', paddingBottom: '1rem' }}>
      {/* 
        HEY YOU! As you are here, you probably use this boilerplate.
        If you are happy about it. Please, leave this link here to let people use it too.
        Thank you!
       */}
      Get one for you – <a href={`https://mzaremski.com/persite?utm_source=${host}`}>PerSite</a>
    </div>
  );
}
