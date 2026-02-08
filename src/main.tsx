import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './lib/i18n/config'
import './styles/globals.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Suspense fallback={<div className="min-h-screen bg-leather" />}>
        <App />
      </Suspense>
    </HelmetProvider>
  </StrictMode>,
)
