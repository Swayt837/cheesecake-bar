import { useLanguage } from '@/hooks'
import { cn } from '@/utils'

export function LanguageSwitcher() {
  const { currentLanguage, changeLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 text-sm font-body">
      <button
        onClick={() => changeLanguage('fr')}
        className={cn(
          'px-2 py-1 transition-colors duration-300 cursor-pointer',
          currentLanguage === 'fr' ? 'text-gold font-semibold' : 'text-sand hover:text-ivory'
        )}
        aria-label="Français"
      >
        FR
      </button>
      <span className="text-sand/65">|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={cn(
          'px-2 py-1 transition-colors duration-300 cursor-pointer',
          currentLanguage === 'en' ? 'text-gold font-semibold' : 'text-sand hover:text-ivory'
        )}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
