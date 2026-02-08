import { Helmet } from 'react-helmet-async'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://cheesecakebar.fr'
const WHATSAPP = import.meta.env.VITE_WHATSAPP_NUMBER || '33000000000'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Cheesecake Bar',
  description:
    'Bar à cheesecake événementiel sur la Côte d\'Azur. Cheesecake cups premium servis comme un cocktail avec show coulis au flair.',
  url: SITE_URL,
  telephone: `+${WHATSAPP}`,
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 43.7102,
      longitude: 7.262,
    },
    geoRadius: '50000',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nice',
    addressRegion: 'Provence-Alpes-Côte d\'Azur',
    addressCountry: 'FR',
  },
  priceRange: '€€',
  servesCuisine: 'Desserts, Cheesecake',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formules événementielles',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Drop-off',
        description: 'Livraison de cups prêtes à servir',
      },
      {
        '@type': 'Offer',
        name: 'Cheesecake Bar',
        description: 'Service sur place avec bar dédié',
      },
      {
        '@type': 'Offer',
        name: 'Signature Show',
        description: 'Bar + show flair coulis + mise en scène',
      },
    ],
  },
}

export function SchemaOrg() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
