import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/hooks'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '33000000000'

interface PricingItem {
  id: string
  name: { fr: string; en: string }
  description: { fr: string; en: string }
  price: number | null
  servings: { fr: string; en: string }
  icon: 'box' | 'cake'
}

const pricingItems: PricingItem[] = [
  {
    id: 'box-4',
    name: { fr: 'Box 4 Cups', en: 'Box of 4 Cups' },
    description: { fr: 'Idéale pour un dessert entre amis', en: 'Perfect for a dessert with friends' },
    price: 24,
    servings: { fr: '4 personnes', en: '4 servings' },
    icon: 'box',
  },
  {
    id: 'box-6',
    name: { fr: 'Box 6 Cups', en: 'Box of 6 Cups' },
    description: { fr: 'Parfaite pour un repas en famille', en: 'Ideal for a family meal' },
    price: 34,
    servings: { fr: '6 personnes', en: '6 servings' },
    icon: 'box',
  },
  {
    id: 'whole-8',
    name: { fr: 'Cheesecake Entier', en: 'Whole Cheesecake' },
    description: { fr: 'Cheesecake premium pour vos tables', en: 'Premium cheesecake for your table' },
    price: 45,
    servings: { fr: '8 personnes', en: '8 servings' },
    icon: 'cake',
  },
  {
    id: 'whole-10',
    name: { fr: 'Cheesecake Entier XL', en: 'Whole Cheesecake XL' },
    description: { fr: 'Grand format pour les grandes occasions', en: 'Large format for special occasions' },
    price: 55,
    servings: { fr: '10 personnes', en: '10 servings' },
    icon: 'cake',
  },
]

function BoxIcon() {
  return (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  )
}

function CakeIcon() {
  return (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12 3.75c.621 0 1.125-.504 1.125-1.125S12.621 1.5 12 1.5s-1.125.504-1.125 1.125S11.379 3.75 12 3.75z" />
    </svg>
  )
}

export function PricingSection() {
  const { t } = useTranslation()
  const { currentLanguage } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const orderMessage = encodeURIComponent('Bonjour, je souhaiterais passer une commande.')

  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-leather" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,164,92,0.09),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold/60 font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            {t('pricing.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory tracking-wide">
            {t('pricing.title')}
          </h2>
          <p className="text-sand/65 text-sm mt-4 font-body max-w-md mx-auto">
            {t('pricing.subtitle')}
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative flex flex-col p-6 rounded-sm border border-gold/20 bg-leather-light/40
                         hover:border-gold/30 hover:shadow-[0_0_40px_rgba(201,164,92,0.1)] hover:-translate-y-1
                         transition-all duration-500"
            >
              {/* Icon */}
              <div className="text-gold/40 group-hover:text-gold/70 transition-colors duration-300 mb-5">
                {item.icon === 'box' ? <BoxIcon /> : <CakeIcon />}
              </div>

              {/* Name */}
              <h3 className="font-display text-xl text-ivory group-hover:text-gold transition-colors duration-300 mb-2">
                {item.name[currentLanguage]}
              </h3>

              {/* Servings */}
              <span className="text-gold/60 text-xs font-body tracking-wider uppercase mb-3">
                {item.servings[currentLanguage]}
              </span>

              <div className="w-8 h-px bg-gold/20 mb-3" />

              {/* Description */}
              <p className="text-sand/65 text-sm font-body leading-relaxed flex-1 mb-6">
                {item.description[currentLanguage]}
              </p>

              {/* Price */}
              {item.price && (
                <div className="mb-5">
                  <span className="font-display text-3xl text-gold">{item.price}</span>
                  <span className="text-gold/60 text-lg ml-1">€</span>
                </div>
              )}

              {/* CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${orderMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-gold/30 text-gold
                           font-body text-sm tracking-wide px-4 py-2.5 rounded-sm
                           hover:bg-gold hover:text-leather transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('pricing.order')}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Delivery note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sand/60 text-xs font-body mt-10 tracking-wide"
        >
          {t('pricing.delivery_note')}
        </motion.p>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
