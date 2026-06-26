'use client'
import { useRef, useEffect } from 'react'
import styles from './Reviews.module.css'

const reviews = [
  {
    name: 'Niko',
    location: 'Felixdorf',
    rating: 5,
    text: 'Wir sind super zufrieden mit dem neuen Rasen. Das Team war sehr freundlich, kompetent und zuverlässig. Top Beratung, pünktlich, flexibel und Preis-Leistung ist perfekt. Jederzeit wieder!',
    service: 'Rollrasen verlegen',
    initial: 'N',
  },
  {
    name: 'Karin Cech',
    location: 'Wien, Floridsdorf',
    rating: 5,
    text: 'Wir sind begeistert! Super prompt und zuverlässig! Die zwei Herren haben sehr sauber und schön gearbeitet und der Rasen hat eine Top-Qualität! Sehr zu empfehlen!',
    service: 'Rollrasen verlegen',
    initial: 'K',
  },
  {
    name: 'Harald',
    location: 'Schwechat',
    rating: 5,
    text: 'Sehr nette Firma und ausgezeichnete Beratung. Alles wurde zeitgerecht und zu unserer Zufriedenheit ausgeführt.',
    service: 'Gartenplanung',
    initial: 'H',
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div className={styles.stars} aria-label={`${n} von 5 Sternen`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < n ? '#8FAF7E' : 'none'} stroke={i < n ? '#8FAF7E' : 'rgba(255,255,255,0.2)'} strokeWidth="1.5" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    cardRefs.current.forEach(el => { if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`${styles.section} reveal`}>
      <div className={styles.head}>
        <p className={styles.label}>Kundenstimmen</p>
        <h2 className={styles.title}>Was unsere Kunden sagen</h2>
        <p className={styles.sub}>Echte Bewertungen von zufriedenen Kunden aus der Region.</p>
      </div>

      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <div key={i} ref={el => { cardRefs.current[i] = el }} className={`${styles.card} reveal`}
            style={{ transitionDelay: `${i * 0.12}s` }}>
            {/* Anführungszeichen */}
            <div className={styles.quote} aria-hidden="true">&ldquo;</div>
            <Stars n={r.rating} />
            <p className={styles.text}>{r.text}</p>
            <div className={styles.footer}>
              <div className={styles.avatar} aria-hidden="true">{r.initial}</div>
              <div>
                <div className={styles.name}>{r.name}</div>
                <div className={styles.meta}>{r.location} · {r.service}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Google badge */}
      <div className={styles.googleRow}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
        <span>MyHammer Bewertungen · Ø 4,8 von 5 (45 Bewertungen)</span>
        <a href="https://www.my-hammer.at/auftragnehmer/traum-gartenservice/bewertungen" target="_blank" rel="noopener noreferrer" className={styles.googleLink}>
          Alle ansehen →
        </a>
      </div>
    </section>
  )
}
