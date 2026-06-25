'use client'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgText} aria-hidden="true">GRÜN</div>

      <svg className={styles.leaf} viewBox="0 0 280 280" fill="none" aria-hidden="true">
        <path d="M140 18C250 18 275 105 255 195C232 278 62 295 30 208C0 128 40 18 140 18Z" fill="white"/>
        <path d="M140 18C136 90 138 180 142 275" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M142 75C178 93 215 118 244 148" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M141 120C172 137 200 157 222 182" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M141 75C110 96 80 122 56 152" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M141 128C116 148 90 168 70 196" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>

      <div className={styles.inner}>
        <p className={styles.eyebrow}>Professionelle Gartenpflege · Wien</p>

        <h1 className={styles.title}>
          Ihr Garten in<br />
          <em className={styles.titleEm}>besten Händen.</em>
        </h1>

        <p className={styles.sub}>
          Zuverlässige Grünflächenpflege, Reinigung und Grabpflege in Wien —
          nachhaltig, sorgfältig und termingerecht.
        </p>

        <div className={styles.actions}>
          <button onClick={() => scrollTo('#kontakt')} className={styles.btnPrimary}>
            Jetzt Kontakt aufnehmen
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          <button onClick={() => scrollTo('#leistungen')} className={styles.btnOutline}>
            Unsere Leistungen
          </button>
        </div>

        <div className={styles.stats}>
          <div>
            <div className={styles.statNum}>Wien</div>
            <div className={styles.statLbl}>Einsatzgebiet</div>
          </div>
          <div>
            <div className={styles.statNum}>8+</div>
            <div className={styles.statLbl}>Leistungen</div>
          </div>
          <div>
            <div className={styles.statNum}>100%</div>
            <div className={styles.statLbl}>Rechtl. zugelassen</div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>Mehr entdecken</span>
        <div className={styles.scrollDot} />
      </div>
    </section>
  )
}
