import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from '@/components/layout'
import { Loader } from '@/components/ui/Loader'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

const HomePage = lazy(() => import('@/pages/HomePage'))
const EvenementielPage = lazy(() => import('@/pages/EvenementielPage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/evenementiel" element={<EvenementielPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App
