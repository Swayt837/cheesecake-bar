import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { cn } from '@/utils'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const { t } = useTranslation()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navigate = useNavigate()

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/#' + id)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const linkClass = (active: boolean) =>
    cn(
      'font-body text-sm tracking-wider uppercase transition-colors duration-300 cursor-pointer',
      active ? 'text-gold' : 'text-ivory hover:text-gold'
    )

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-transparent py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Left - Logo */}
        <Link to="/" className="transition-opacity hover:opacity-80">
          <img
            src="/logo.png"
            alt="Cheesecake Bar"
            className={cn(
              'transition-all duration-500',
              scrolled ? 'h-24' : 'h-40'
            )}
          />
        </Link>

        {/* Right - Nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('pricing')}
            className={linkClass(false)}
          >
            {t('nav.commander')}
          </button>
          <Link
            to="/evenementiel"
            className={linkClass(location.pathname === '/evenementiel')}
          >
            {t('nav.evenement')}
          </Link>
          <Link
            to="/a-propos"
            className={linkClass(location.pathname === '/a-propos')}
          >
            {t('nav.about')}
          </Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile burger - right side */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-ivory hover:text-gold transition-colors cursor-pointer"
          aria-label="Ouvrir le menu"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
