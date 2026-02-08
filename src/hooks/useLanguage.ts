import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'

type SupportedLanguage = 'fr' | 'en'

export function useLanguage() {
  const { i18n } = useTranslation()

  const currentLanguage = (i18n.language?.substring(0, 2) || 'fr') as SupportedLanguage

  const changeLanguage = useCallback(
    (lang: SupportedLanguage) => {
      i18n.changeLanguage(lang)
    },
    [i18n]
  )

  const toggleLanguage = useCallback(() => {
    const next = currentLanguage === 'fr' ? 'en' : 'fr'
    changeLanguage(next)
  }, [currentLanguage, changeLanguage])

  return {
    currentLanguage,
    changeLanguage,
    toggleLanguage,
    isFrench: currentLanguage === 'fr',
    isEnglish: currentLanguage === 'en',
  }
}
