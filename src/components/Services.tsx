'use client'
import { useRef, useEffect } from 'react'
import styles from './Services.module.css'

// Fotoğraflar: public/images/services/ klasörüne .jpg olarak yükleyin
// Yüklenene kadar koyu yeşil placeholder gösterilir
const services = [
  { photo: '/images/services/rasenmähen.jpg',    title: 'Rasenmähen',                alt: 'Rasenmähen',              badge: null,            desc: 'Regelmäßiges Mähen Ihrer Rasenflächen für ein gepflegtes Erscheinungsbild das ganze Jahr über.' },
  { photo: '/images/services/bewässern.jpg',     title: 'Bewässern & Gießen',        alt: 'Bewässerung',             badge: null,            desc: 'Fachgerechte Bewässerung Ihrer Grünflächen, Beete und Pflanzen — termingerecht und bedarfsgerecht.' },
  { photo: '/images/services/jäten.jpg',         title: 'Jäten',                     alt: 'Jäten',                   badge: null,            desc: 'Gründliches Entfernen von Unkraut, damit Ihr Garten sauber und gepflegt bleibt.' },
  { photo: '/images/services/mulchen.jpg',       title: 'Mulchen',                   alt: 'Mulchen',                 badge: null,            desc: 'Mulchmaterial zum Schutz Ihrer Beete — hält Feuchtigkeit und hemmt Unkrautwachstum.' },
  { photo: '/images/services/laubrechen.jpg',    title: 'Laubrechen',                alt: 'Laubrechen',              badge: null,            desc: 'Saisonales Sammeln und Entfernen von Laub — für saubere Flächen im Herbst.' },
  { photo: '/images/services/reinigung.jpg',     title: 'Verkehrsflächenreinigung',  alt: 'Reinigung',               badge: 'Freies Gewerbe', desc: 'Reinigung von Gehwegen, Innenhöfen und Parkplätzen — zuverlässig und regelmäßig.' },
  { photo: '/images/services/grabpflege.jpg',    title: 'Grabpflege',                alt: 'Grabpflege',              badge: 'Freies Gewerbe', desc: 'Würdevolle Pflege von Grabstätten — Bepflanzung, Reinigung und saisonale Gestaltung.' },
  { photo: '/images/services/rollrasen.jpg',     title: 'Rollrasen verlegen',        alt: 'Rollrasen',               badge: null,            desc: 'Professionelles Verlegen von Fertigrasen inkl. Bodenvorbereitigung — sofort nutzbar.' },
]

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${styles.card} reveal`} style={{ transitionDelay: `${(index % 4) * 0.09}s` }}>
      <div className={styles.photoWrap}>
        <div className={styles.photo} style={{ backgroundImage: `url('${svc.photo}')` }} role="img" aria-label={svc.alt} />
        <div className={styles.photoOverlay} />
        {svc.badge && <span className={styles.badge}>{svc.badge}</span>}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{svc.title}</h3>
        <p className={styles.cardDesc}>{svc.desc}</p>
      </div>
    </div>
  )
}

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = headRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="leistungen" className={styles.section}>
      <div ref={headRef} className={`${styles.head} reveal`}>
        <p className={styles.label}>Unsere Leistungen</p>
        <h2 className={styles.title}>Was wir für Sie tun</h2>
        <p className={styles.sub}>Alle Leistungen fachgerecht und im gesetzlich zulässigen Rahmen erbracht.</p>
      </div>
      <div className={styles.grid}>
        {services.map((svc, i) => <ServiceCard key={i} svc={svc} index={i} />)}
      </div>
    </section>
  )
}
