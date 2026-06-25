import Header from '@/components/Header'
import Hero from '@/components/Hero'
import BeforeAfter from '@/components/BeforeAfter'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
