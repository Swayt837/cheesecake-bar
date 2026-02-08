import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { OccasionCard } from '@/components/ui/OccasionCard'
import { FormulasSection } from '@/components/sections/FormulasSection'
import { EventGallery } from '@/components/sections/EventGallery'
import { QuoteForm } from '@/components/sections/QuoteForm'
import { SEOHead } from '@/components/seo'

const occasions = [
  { key: 'birthday', icon: '🎂' },
  { key: 'babyshower', icon: '👶' },
  { key: 'wedding', icon: '💍' },
  { key: 'evjf', icon: '🥂' },
] as const

export default function EventsParticuliersPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead
        title={t('events.particuliers.title')}
        description={t('events.particuliers.subtitle')}
        path="/evenements/particuliers"
      />
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-leather-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-leather/80 to-leather-dark" />
        <div className="relative section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-1"
          >
            {t('events.particuliers.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-secondary text-lg mt-4 max-w-2xl mx-auto"
          >
            {t('events.particuliers.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Occasions grid 2x2 */}
      <section className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {occasions.map(({ key, icon }) => (
            <OccasionCard
              key={key}
              icon={<span className="text-4xl">{icon}</span>}
              title={t(`events.particuliers.occasions.${key}`)}
            />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="section-container">
        <EventGallery category="particulier" />
      </section>

      {/* Formules */}
      <FormulasSection />

      {/* Quote form */}
      <QuoteForm />
    </>
  )
}
