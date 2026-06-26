'use client'
import { useState, useEffect } from 'react'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setTimeout(() => setVisible(true), 800)
    }
  }, [])

  const accept = () => { localStorage.setItem('cookie-consent', 'accepted'); setVisible(false) }
  const decline = () => { localStorage.setItem('cookie-consent', 'declined'); setVisible(false) }

  if (!visible) return null

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie-Einstellungen">
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.title}>Wir verwenden Cookies 🍪</p>
          <p className={styles.desc}>
            Diese Website verwendet Cookies, um die Nutzererfahrung zu verbessern.
            Mit dem Klick auf „Akzeptieren" stimmen Sie der Verwendung zu.{' '}
            <a href="/datenschutz" className={styles.link}>Datenschutzerklärung</a>
          </p>
        </div>
        <div className={styles.actions}>
          <button onClick={decline} className={styles.btnDecline}>Ablehnen</button>
          <button onClick={accept} className={styles.btnAccept}>Akzeptieren</button>
        </div>
      </div>
    </div>
  )
}
