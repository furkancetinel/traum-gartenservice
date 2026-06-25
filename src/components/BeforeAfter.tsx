'use client'
import { useState, useRef, useCallback, useEffect } from 'react'
import styles from './BeforeAfter.module.css'

const slides = [
  {
    label: 'Rasenpflege',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    after:  'https://images.unsplash.com/photo-1589923188651-268a9765e432?w=1200&q=80',
  },
  {
    label: 'Gartenreinigung',
    before: 'https://images.unsplash.com/photo-1601001435957-74f0958a6078?w=1200&q=80',
    after:  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80',
  },
  {
    label: 'Grabpflege',
    before: 'https://images.unsplash.com/photo-1597734750510-cbbc6af6ee68?w=1200&q=80',
    after:  'https://images.unsplash.com/photo-1530968831187-a937a547a5e7?w=1200&q=80',
  },
  {
    label: 'Rollrasen',
    before: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=1200&q=80',
    after:  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  },
]

export default function BeforeAfter() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const getPct = useCallback((clientX: number) => {
    const rect = sliderRef.current?.getBoundingClientRect()
    if (!rect) return 50
    return Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100))
  }, [])

  const onMouseDown = (e: React.MouseEvent) => { dragging.current = true; setPos(getPct(e.clientX)) }
  const onTouchStart = (e: React.TouchEvent) => { dragging.current = true; setPos(getPct(e.touches[0].clientX)) }

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) setPos(getPct(e.clientX)) }
    const onTMove = (e: TouchEvent) => { if (dragging.current) setPos(getPct(e.touches[0].clientX)) }
    const onUp = () => { dragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onTMove, { passive: true })
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onTMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [getPct])

  const handleTabClick = (i: number) => { setActiveIdx(i); setPos(50) }

  return (
    <section id="vorher-nachher" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>Unsere Arbeit</p>
        <h2 className={styles.title}>Vorher &amp; Nachher</h2>
        <p className={styles.sub}>Sehen Sie selbst, welchen Unterschied professionelle Pflege macht.</p>
      </div>

      <div className={styles.tabs}>
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => handleTabClick(i)}
            className={`${styles.tab} ${activeIdx === i ? styles.tabActive : ''}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div
        ref={sliderRef}
        className={styles.sliderWrap}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        role="img"
        aria-label={`Vorher/Nachher Vergleich: ${slides[activeIdx].label}`}
      >
        {/* After (hinter) */}
        <div
          className={styles.imgAfter}
          style={{ backgroundImage: `url(${slides[activeIdx].after})` }}
        />
        {/* Before (vorne, geclippt) */}
        <div
          className={styles.imgBefore}
          style={{
            backgroundImage: `url(${slides[activeIdx].before})`,
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
          }}
        />
        <div className={styles.labelBefore} aria-hidden="true">Vorher</div>
        <div className={styles.labelAfter} aria-hidden="true">Nachher</div>
        <div className={styles.handle} style={{ left: `${pos}%` }}>
          <div className={styles.handleBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C3A2B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
              <polyline points="9 18 3 12 9 6"/>
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.miniGrid}>
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => handleTabClick(i)}
            className={`${styles.mini} ${activeIdx === i ? styles.miniActive : ''}`}
            aria-label={`${s.label} anzeigen`}
          >
            <div className={styles.miniImg} style={{ backgroundImage: `url(${s.after})` }} />
            <div className={styles.miniCap}>{s.label}</div>
          </button>
        ))}
      </div>
    </section>
  )
}
