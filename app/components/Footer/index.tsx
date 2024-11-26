import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <div style={{ width: '100%', textAlign: 'center', fontSize: '0.9rem', paddingBottom: '1rem' }}>
      Get one for you – <Link to="/persite">Persite</Link>
      {/* Get one for you – <a href="https://mzaremski.com/persite?utm_source=persite">Persite</a> */}
    </div>
  );
}
