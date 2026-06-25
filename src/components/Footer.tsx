import Image from 'next/image'
import styles from './Footer.module.css'

const services = [
  'Rasenmähen', 'Bewässern & Gießen', 'Jäten', 'Mulchen',
  'Laubrechen', 'Verkehrsflächenreinigung', 'Grabpflege', 'Rollrasen verlegen',
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaBand}>
        <p>Wir machen Ihren Garten <em>zum Traum</em> — unverbindlich anfragen.</p>
        <a href="#kontakt" className={styles.ctaBtn}>Jetzt Angebot einholen →</a>
      </div>

      <div className={styles.main}>
        <div className={styles.brand}>
          <a href="/" className={styles.logoWrap} aria-label="TraumGartenservice">
            <Image src="/logo.svg" alt="TraumGartenservice" width={180} height={38} />
          </a>
          <p className={styles.tagline}>
            Professionelle Gartenpflege &amp; Grünflächenreinigung in Wiener Neustadt
            und Umgebung — sorgfältig, zuverlässig, rechtlich zugelassen.
          </p>
          <span className={styles.badge}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8FAF7E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            Behördlich angemeldetes Gewerbe · Wiener Neustadt
          </span>
          <div className={styles.socials}>
            {[
              { label: 'Instagram', path: <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></> },
              { label: 'Facebook', path: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/> },
              { label: 'WhatsApp', path: <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/> },
            ].map(({ label, path }) => (
              <a key={label} href="#" aria-label={label} className={styles.socBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{path}</svg>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h4>Leistungen</h4>
          <ul>{services.map(s => <li key={s}><a href="#leistungen">{s}</a></li>)}</ul>
        </div>

        <div className={styles.col}>
          <h4>Unternehmen</h4>
          <ul>
            <li><a href="#ueber-uns">Über uns</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
            <li><a href="/impressum">Impressum</a></li>
            <li><a href="/datenschutz">Datenschutz</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Kontakt</h4>
          <div className={styles.contactRows}>
            <div className={styles.contactRow}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8FAF7E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Grazer Str. 73, 2700 Wiener Neustadt</span>
            </div>
            <div className={styles.contactRow}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8FAF7E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.08-8.59A2 2 0 013.58 1.22h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.91 8.77a16 16 0 006.29 6.29l1.6-1.6a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
              <a href="tel:+436765476510">+43 676 5476510</a>
            </div>
            <div className={styles.contactRow}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8FAF7E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:info@traumgartenservice.at">info@traumgartenservice.at</a>
            </div>
            <div className={styles.contactRow}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8FAF7E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Mo–Fr: 07:00–18:00 Uhr</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} TraumGartenservice · Wiener Neustadt · Alle Rechte vorbehalten.</p>
        <div className={styles.legal}>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutzerklärung</a>
          <a href="/agb">AGB</a>
        </div>
      </div>
    </footer>
  )
}
