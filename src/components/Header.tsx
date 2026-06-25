'use client'
import { useState, useEffect } from 'react'
import styles from './Header.module.css'

const navLinks = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#vorher-nachher', label: 'Vorher/Nachher' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((sec) => {
        const el = sec as HTMLElement
        if (window.scrollY + 100 >= el.offsetTop) current = el.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <a href="/" className={styles.logo} aria-label="TraumGartenservice">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="#8FAF7E"/>
            <path d="M16 4C11 10 7 14 7 19a9 9 0 0018 0c0-5-4-9-9-15z" fill="#1C3A2B"/>
            <path d="M16 16v10" stroke="#8FAF7E" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          <span className={styles.logoText}>
            Traum<em>Garten</em>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`${styles.navLink} ${active === link.href.slice(1) ? styles.navActive : ''}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNav('#kontakt')}
          className={styles.cta}
        >
          Angebot anfragen
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </header>

      {/* Mobil menü */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            className={styles.mobileLink}
          >
            {link.label}
          </button>
        ))}
        <button onClick={() => handleNav('#kontakt')} className={styles.mobileCta}>
          Angebot anfragen →
        </button>
      </div>
    </>
  )
}
