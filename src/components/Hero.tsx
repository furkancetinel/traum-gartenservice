'use client'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const stats = [
  { num: '8+', label: 'Leistungen' },
  { num: '100%', label: 'Rechtl. zugelassen' },
  { num: 'Wien', label: 'Einsatzgebiet' },
]

export default function Hero() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  const counterRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = counterRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      {/*
        ═══════════════════════════════════════════
        HERO FOTOĞRAFI
        Dosya: public/images/hero-bg.jpg
        Öneri: Geniş açı Viyana bahçesi / peyzaj
        Boyut: 1920×1080px veya daha büyük
        Ekledikten sonra: background satırını
        backgroundImage: "url('/images/hero-bg.jpg')"
        ile değiştirin, background: '#1C3A2B' silin
        ═══════════════════════════════════════════
      */}
      <div className={styles.photoBg} style={{ background: '#1C3A2B' }} role="img" aria-label="Gepflegter Garten in Wien" />
      <div className={styles.overlay} aria-hidden="true" />

      {/* Hareketli daire süsler */}
      <div className={styles.decor1} aria-hidden="true" />
      <div className={styles.decor2} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.eyebrowRow}>
          <span className={styles.dot} aria-hidden="true" />
          <p className={styles.eyebrow}>Professionelle Gartenpflege · Wiener Neustadt</p>
        </div>

        <h1 className={styles.title}>
          Ihr Garten.<br />
          <span className={styles.titleAccent}>Unsere Leidenschaft.</span>
        </h1>

        <p className={styles.sub}>
          Rasenmähen, Bewässerung, Grabpflege und Reinigung —
          termingerecht, sorgfältig und zu fairen Preisen.
        </p>

        <div className={styles.actions}>
          <button onClick={() => scrollTo('#kontakt')} className={styles.btnPrimary}>
            Kostenloses Angebot anfragen
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          <button onClick={() => scrollTo('#leistungen')} className={styles.btnGhost}>
            Leistungen ansehen
          </button>
        </div>

        {/* Stats */}
        <div ref={counterRef} className={`${styles.stats} reveal`}>
          {stats.map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button className={styles.scrollBtn} onClick={() => scrollTo('#leistungen')} aria-label="Weiter scrollen">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
    </section>
  )
}
