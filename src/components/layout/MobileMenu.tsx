import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { cn } from '@/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation()
  const location = useLocation()

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      onClose()
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    onClose()
  }

  const linkClass = (active: boolean) =>
    cn(
      'font-body text-lg tracking-wider uppercase transition-colors duration-300',
      active ? 'text-gold' : 'text-ivory hover:text-gold'
    )

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-leather z-50 lg:hidden
                       flex flex-col items-center justify-center gap-8 p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-ivory hover:text-gold transition-colors cursor-pointer"
              aria-label="Fermer le menu"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col items-center gap-8">
              <button
                onClick={() => scrollToSection('pricing')}
                className={linkClass(false)}
              >
                {t('nav.commander')}
              </button>
              <Link
                to="/evenementiel"
                onClick={onClose}
                className={linkClass(location.pathname === '/evenementiel')}
              >
                {t('nav.evenement')}
              </Link>
              <Link
                to="/a-propos"
                onClick={onClose}
                className={linkClass(location.pathname === '/a-propos')}
              >
                {t('nav.about')}
              </Link>
            </nav>

            <div className="gold-line w-24" />

            <LanguageSwitcher />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
