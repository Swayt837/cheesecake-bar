import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { cn } from '@/utils'

interface NavigationProps {
  onLinkClick?: () => void
  vertical?: boolean
}

export function Navigation({ onLinkClick, vertical = false }: NavigationProps) {
  const { t } = useTranslation()
  const location = useLocation()

  const handleClick = () => {
    onLinkClick?.()
  }

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      onLinkClick?.()
      return
    }
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
    onLinkClick?.()
  }

  const linkClass = (active: boolean) =>
    cn(
      'font-body text-sm tracking-wider uppercase transition-colors duration-300 cursor-pointer',
      active ? 'text-gold' : 'text-ivory hover:text-gold'
    )

  return (
    <nav
      className={cn(
        'flex gap-6',
        vertical ? 'flex-col items-center gap-8 text-lg' : 'items-center'
      )}
    >
      <Link to="/" onClick={handleClick} className={linkClass(location.pathname === '/')}>
        {t('nav.home')}
      </Link>

      <button
        onClick={() => scrollToSection('products')}
        className={linkClass(false)}
      >
        {t('nav.creations')}
      </button>

      <button
        onClick={() => scrollToSection('pricing')}
        className={linkClass(false)}
      >
        {t('nav.pricing')}
      </button>

      <Link
        to="/evenementiel"
        onClick={handleClick}
        className={linkClass(location.pathname === '/evenementiel')}
      >
        {t('nav.events')}
      </Link>

      <Link
        to="/a-propos"
        onClick={handleClick}
        className={linkClass(location.pathname === '/a-propos')}
      >
        {t('nav.about')}
      </Link>

      <button
        onClick={() => scrollToSection('quote')}
        className="btn-primary text-sm"
      >
        {t('nav.quote')}
      </button>
    </nav>
  )
}
