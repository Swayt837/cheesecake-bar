import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ExperienceBar } from '@/components/sections/ExperienceBar'
import { FormulasSection } from '@/components/sections/FormulasSection'
import { QuoteForm } from '@/components/sections/QuoteForm'
import { SEOHead } from '@/components/seo'

export default function EvenementielPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead
        title="Événementiel"
        description="Cheesecake Bar événementiel - Show flair coulis en live, bar à cheesecake pour vos événements sur la Côte d'Azur."
        path="/evenementiel"
      />

      {/* Page header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-leather-dark via-leather to-leather" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,164,92,0.06),transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold/60 font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              {t('nav.events')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory tracking-wide">
              {t('events_page.title')}
            </h1>
            <p className="text-sand/75 text-base mt-4 font-body max-w-xl mx-auto leading-relaxed">
              {t('events_page.subtitle')}
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Event types */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-leather" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Particuliers */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 border border-gold/20 rounded-sm bg-white/[0.06] hover:border-gold/25 transition-all duration-300"
            >
              <h3 className="font-display text-2xl text-gold mb-3">
                {t('events.particuliers.title')}
              </h3>
              <p className="text-sand/75 text-sm font-body mb-6">
                {t('events.particuliers.subtitle')}
              </p>
              <div className="flex flex-wrap gap-2">
                {(['birthday', 'babyshower', 'wedding', 'evjf'] as const).map((key) => (
                  <span
                    key={key}
                    className="px-3 py-1.5 text-xs text-sand/70 border border-gold/25 rounded-sm font-body"
                  >
                    {t(`events.particuliers.occasions.${key}`)}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Entreprises */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-8 border border-gold/20 rounded-sm bg-white/[0.06] hover:border-gold/25 transition-all duration-300"
            >
              <h3 className="font-display text-2xl text-gold mb-3">
                {t('events.entreprises.title')}
              </h3>
              <p className="text-sand/75 text-sm font-body mb-6">
                {t('events.entreprises.subtitle')}
              </p>
              <div className="flex flex-wrap gap-2">
                {(['seminaire', 'afterwork', 'lancement', 'inauguration'] as const).map((key) => (
                  <span
                    key={key}
                    className="px-3 py-1.5 text-xs text-sand/70 border border-gold/25 rounded-sm font-body"
                  >
                    {t(`events.entreprises.occasions.${key}`)}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ExperienceBar />
      <FormulasSection />
      <QuoteForm />
    </>
  )
}
