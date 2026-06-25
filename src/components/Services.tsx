'use client'
import { useRef, useEffect } from 'react'
import styles from './Services.module.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="16" width="20" height="3" rx="1"/>
        <path d="M4 16C4 10 8 6 12 6C16 6 20 10 20 16"/>
        <line x1="12" y1="6" x2="12" y2="3"/>
      </svg>
    ),
    title: 'Rasenmähen',
    badge: null,
    desc: 'Regelmäßiges und gleichmäßiges Mähen Ihrer Rasenflächen für ein gepflegtes Erscheinungsbild das ganze Jahr über.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 8 4 12 4 16a8 8 0 0016 0c0-4-4-8-8-14z"/>
        <path d="M12 12v6"/><path d="M9 15l3 3 3-3"/>
      </svg>
    ),
    title: 'Bewässern & Gießen',
    badge: null,
    desc: 'Fachgerechte Bewässerung Ihrer Grünflächen, Beete und Pflanzen — termingerecht und bedarfsgerecht.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l6-6"/>
        <path d="M9 15C9 9 14 5 20 3C18 9 14 14 9 15z"/>
        <path d="M9 15C15 13 19 9 21 3"/>
      </svg>
    ),
    title: 'Jäten',
    badge: null,
    desc: 'Gründliches Entfernen von Unkraut und unerwünschten Wildpflanzen, damit Ihr Garten sauber und gepflegt bleibt.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="17" rx="9" ry="3"/>
        <path d="M3 17C3 12 7 9 12 7C17 9 21 12 21 17"/>
        <path d="M12 7C12 4 10 2 8 2"/><path d="M12 7C12 4 14 2 16 2"/>
      </svg>
    ),
    title: 'Mulchen',
    badge: null,
    desc: 'Aufbringen von Mulchmaterial zum Schutz Ihrer Beete — hält Feuchtigkeit und hemmt Unkrautwachstum natürlich.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20L12 8"/>
        <path d="M12 8C12 3 18 3 18 8C18 13 12 14 12 8Z"/>
        <line x1="4" y1="20" x2="20" y2="20"/>
      </svg>
    ),
    title: 'Laubrechen & Laub entfernen',
    badge: null,
    desc: 'Saisonales Sammeln und Entfernen von Laub — für saubere Flächen im Herbst und ein gesundes Gartenbild.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="18" width="20" height="3" rx="1"/>
        <path d="M4 18L8 8L16 8L20 18"/>
        <line x1="8" y1="13" x2="16" y2="13"/>
        <line x1="12" y1="8" x2="12" y2="18"/>
      </svg>
    ),
    title: 'Verkehrsflächenreinigung',
    badge: 'freies Gewerbe',
    desc: 'Reinigung von Gehwegen, Innenhöfen und Parkplätzen — zuverlässig, regelmäßig und professionell.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 5 5 5 9C5 15 12 22 12 22C12 22 19 15 19 9C19 5 16 2 12 2Z"/>
        <circle cx="12" cy="9" r="2"/>
      </svg>
    ),
    title: 'Friedhofsgärtnerei & Grabpflege',
    badge: 'freies Gewerbe',
    desc: 'Würdevolle und liebevolle Pflege von Grabstätten — Bepflanzung, Reinigung und saisonale Gestaltung.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="14" width="20" height="6" rx="2"/>
        <path d="M4 14C4 10 6 7 9 6"/>
        <path d="M8 14C8 10 10 7 13 6"/>
        <path d="M12 14C12 10 14 7 17 6"/>
        <path d="M16 14C16 10 18 7 20 8"/>
      </svg>
    ),
    title: 'Rollrasen verlegen',
    badge: null,
    desc: 'Professionelles Verlegen von Fertigrasen inkl. Bodenvorbereitigung — für sofort nutzbare, gleichmäßige Flächen.',
  },
]

function ServiceCard({ svc }: { svc: typeof services[0] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${styles.card} reveal`}>
      <div className={styles.icon}>{svc.icon}</div>
      <h3 className={styles.cardTitle}>{svc.title}</h3>
      {svc.badge && <span className={styles.badge}>{svc.badge}</span>}
      <p className={styles.cardDesc}>{svc.desc}</p>
    </div>
  )
}

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = headRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="leistungen" className={styles.section}>
      <div ref={headRef} className={`${styles.head} reveal`}>
        <p className={styles.label}>Unsere Leistungen</p>
        <h2 className={styles.title}>Was wir für Sie tun</h2>
        <p className={styles.sub}>Alle Leistungen werden fachgerecht und im gesetzlich zulässigen Rahmen erbracht.</p>
      </div>
      <div className={styles.grid}>
        {services.map((svc, i) => <ServiceCard key={i} svc={svc} />)}
      </div>
    </section>
  )
}
