import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { useSanity } from '@/hooks'
import type { Formula } from '@/types'
import { FORMULAS_QUERY } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/imageBuilder'

const formulaKeys = ['dropoff', 'bar', 'signature'] as const

const startingPrices: Record<string, string> = {
  dropoff: '225',
  bar: '525',
  signature: '650',
}

const defaultIcons = {
  dropoff: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h.917c.23 0 .455-.034.672-.098L8.25 13.5M3.375 14.25V3.375c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v7.875" />
    </svg>
  ),
  bar: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l-1.456 1.455a2.25 2.25 0 00-.659 1.591V19.5a2.25 2.25 0 002.25 2.25h13.73a2.25 2.25 0 002.25-2.25v-1.954a2.25 2.25 0 00-.659-1.591L19.8 15.3M5 14.5l7.5-7.5 7.3 7.3" />
    </svg>
  ),
  signature: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
}

export function FormulasSection() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { data: sanityFormulas } = useSanity<Formula[]>(FORMULAS_QUERY)

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="formulas" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-leather" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,164,92,0.09),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold/60 font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Prestations
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory tracking-wide">
            {t('formulas.title')}
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {formulaKeys.map((key, i) => {
            const featured = key === 'bar'
            // Match Sanity formula by order (0, 1, 2) or fall back to translations
            const sanityFormula = sanityFormulas?.[i]

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative flex flex-col rounded-sm border transition-all duration-500 overflow-hidden
                  ${featured
                    ? 'bg-gradient-to-b from-gold/10 to-leather-light border-gold/40 shadow-[0_0_30px_rgba(201,164,92,0.1)]'
                    : 'bg-leather-light/50 border-gold/20 hover:border-gold/30'
                  }
                  hover:shadow-[0_0_40px_rgba(201,164,92,0.12)] hover:-translate-y-1`}
              >
                {/* Featured badge */}
                {featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-gold text-leather text-xs font-semibold px-4 py-1 rounded-sm tracking-wider uppercase">
                      Populaire
                    </span>
                  </div>
                )}

                {/* Image from Sanity */}
                {sanityFormula?.image ? (
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={urlFor(sanityFormula.image).width(600).height(375).format('webp').url()}
                      alt={t(`formulas.${key}.name`)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-leather via-leather/40 to-transparent" />
                  </div>
                ) : (
                  /* Fallback icon */
                  <div className="px-8 pt-8">
                    <div className="text-gold/60 group-hover:text-gold transition-colors duration-300 mb-2">
                      {defaultIcons[key]}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-1 p-8 pt-4">
                  {/* Name */}
                  <h3 className="font-display text-2xl text-ivory group-hover:text-gold transition-colors duration-300 mb-3">
                    {t(`formulas.${key}.name`)}
                  </h3>

                  <div className="w-10 h-px bg-gold/30 mb-4" />

                  {/* Description */}
                  <p className="text-sand text-sm leading-relaxed font-body flex-1 mb-4">
                    {t(`formulas.${key}.description`)}
                  </p>

                  {/* Ideal for */}
                  <p className="text-sand/75 text-xs font-body mb-4">
                    <span className="text-gold/70 font-medium">Ideal : </span>
                    {t(`formulas.${key}.ideal_for`)}
                  </p>

                  {/* Starting price */}
                  <p className="text-sand/50 text-xs font-body tracking-wide mb-6">
                    à partir de <span className="text-gold/60 font-medium">{startingPrices[key]}€</span>
                  </p>

                  {/* CTA */}
                  <Button
                    variant={featured ? 'primary' : 'outline'}
                    size="sm"
                    onClick={scrollToQuote}
                    className="w-full mt-auto"
                  >
                    {t('formulas.cta')}
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
