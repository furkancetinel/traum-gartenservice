import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TraumGartenservice — Professionelle Gartenpflege Wiener Neustadt',
  description: 'Gartenpflege, Rasenmähen, Bewässerung, Grabpflege und Reinigung in Wiener Neustadt. Faire Preise, schnelle Terminvergabe. Jetzt Angebot anfragen: +43 676 5476510',
  keywords: 'Gartenpflege Wiener Neustadt, Rasenmähen, Grabpflege, Grünflächenreinigung, Gartenservice Wien',
  openGraph: {
    title: 'TraumGartenservice — Wiener Neustadt',
    description: 'Professionelle Gartenpflege in Wiener Neustadt und Umgebung.',
    locale: 'de_AT',
    type: 'website',
  },
  icons: { icon: '/icon.svg', apple: '/icon.svg' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
