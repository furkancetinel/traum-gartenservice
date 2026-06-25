'use client'
import { useRef, useEffect } from 'react'
import styles from './About.module.css'

const checks = [
  'Lokal ansässig und gut vernetzt in der Region',
  'Alle Leistungen rechtlich geprüft und zugelassen',
  'Flexible Terminvereinbarung nach Ihren Bedürfnissen',
  'Transparente Preisgestaltung ohne versteckte Kosten',
  'Professionelle Ausrüstung und sorgfältige Ausführung',
  'Grabpflege & Reinigung als eigene freie Gewerbe',
]

function useReveal(cls = 'reveal') {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, cls }
}

export default function About() {
  const photo  = useReveal('reveal-left')
  const text   = useReveal('reveal-right')
  const listEl = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const el = listEl.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="ueber-uns" className={styles.section}>
      {/* FOTOĞRAF KOLONU */}
      <div ref={photo.ref} className={`${styles.photoCol} ${photo.cls}`}>
        {/*
          FOTOĞRAF: public/images/about.jpg (800×560px)
          Öneri: "gardener work professional team outdoor"
        */}
        <div
          className={styles.mainPhoto}
          style={{ backgroundImage: `url('/images/about.jpg')` }}
          role="img"
          aria-label="Das TraumGartenservice-Team bei der Arbeit"
        />
        {/*
          İKİNCİ FOTOĞRAF: public/images/about-2.jpg (400×320px)
          Öneri: "garden detail closeup plants green"
        */}
        <div
          className={styles.accentPhoto}
          style={{ backgroundImage: `url('/images/about-2.jpg')` }}
          role="img"
          aria-label="Detailaufnahme gepflegter Garten"
        />
        <div className={styles.badge}>
          <span className={styles.badgeNum}>Wiener Neustadt</span>
          <span className={styles.badgeLbl}>Unser Standort</span>
        </div>
      </div>

      {/* TEXT KOLONU */}
      <div ref={text.ref} className={`${styles.textCol} ${text.cls}`}>
        <p className={styles.label}>Über uns</p>
        <h2 className={styles.title}>Qualität &amp; Verlässlichkeit</h2>
        <p className={styles.text}>
          TraumGartenservice wurde mit dem Ziel gegründet, eine zuverlässige
          und professionelle Lösung für Grünpflege und Reinigung zu bieten.
          Unser Team arbeitet mit Leidenschaft und Sorgfalt.
        </p>
        <p className={styles.text}>
          Wir legen großen Wert auf klare Kommunikation, pünktliche Ausführung
          und nachhaltige Arbeitsweise.
        </p>

        <ul ref={listEl} className={`${styles.list} reveal`}>
          {checks.map((item, i) => (
            <li key={i} className={styles.listItem} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className={styles.check} aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
