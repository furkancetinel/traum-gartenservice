import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TraumGartenservice – Professionelle Gartenpflege in Wien',
  description: 'Zuverlässige Grünflächenpflege, Rasenmähen, Bewässerung, Grabpflege und Reinigung in Wien. Rechtlich zugelassen, termingerecht und nachhaltig.',
  keywords: 'Gartenpflege Wien, Rasenmähen Wien, Grabpflege Wien, Grünflächenreinigung, Gartenservice',
  openGraph: {
    title: 'TraumGartenservice – Wien',
    description: 'Professionelle Gartenpflege in Wien',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
