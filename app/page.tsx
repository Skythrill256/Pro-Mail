import Header from '@/components/Header'
import EmailClient from '@/components/EmailClient'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen  text-neon-blue flex flex-col">
      <Header />
      <EmailClient />
      <Footer />
    </main>
  )
}

