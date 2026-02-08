import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/hooks'

interface SEOHeadProps {
  title: string
  description: string
  path?: string
  image?: string
}

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://cheesecakebar.fr'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

export function SEOHead({ title, description, path = '', image }: SEOHeadProps) {
  const { currentLanguage } = useLanguage()
  const fullTitle = `${title} | Cheesecake Bar`
  const canonical = `${SITE_URL}${path}`
  const ogImage = image || DEFAULT_IMAGE

  return (
    <Helmet>
      <html lang={currentLanguage} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="fr" href={canonical} />
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={currentLanguage === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:site_name" content="Cheesecake Bar" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
