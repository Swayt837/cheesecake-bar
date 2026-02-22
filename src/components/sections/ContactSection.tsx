import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const cities = [
  'Nice', 'Cannes', 'Antibes', 'Mougins', 'Grasse',
  'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Vence',
  'Villeneuve-Loubet', 'Mandelieu',
]

export function ContactSection() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/cheesecakebar'
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '33000000000'

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-leather" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,164,92,0.09),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold/60 font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-ivory tracking-wide">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Bonjour, je souhaiterais passer une commande.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 border border-gold/20 rounded-sm
                         bg-white/[0.06] hover:border-gold/30 hover:bg-gold/5 hover:shadow-[0_0_20px_rgba(201,164,92,0.06)] transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-gold/20 rounded-full
                              group-hover:border-gold/50 transition-colors duration-300">
                <svg className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <span className="text-ivory font-body text-sm group-hover:text-gold transition-colors">
                  {t('contact.whatsapp')}
                </span>
                <p className="text-sand/60 text-xs mt-0.5 font-body">{t('contact.response_time')}</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 border border-gold/20 rounded-sm
                         bg-white/[0.06] hover:border-gold/30 hover:bg-gold/5 hover:shadow-[0_0_20px_rgba(201,164,92,0.06)] transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-gold/20 rounded-full
                              group-hover:border-gold/50 transition-colors duration-300">
                <svg className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <span className="text-ivory font-body text-sm group-hover:text-gold transition-colors">
                  {t('contact.instagram')}
                </span>
                <p className="text-sand/60 text-xs mt-0.5 font-body">@cheesecakebar_riviera</p>
              </div>
            </a>

          </motion.div>

          {/* Delivery zone */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-xl text-gold mb-6 tracking-wide">
              {t('contact.delivery_zone')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((city, i) => (
                <motion.span
                  key={city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                  className="px-4 py-2 text-sm text-sand/70 border border-gold/25 rounded-sm
                             hover:border-gold/30 hover:text-ivory transition-all duration-300 font-body"
                >
                  {city}
                </motion.span>
              ))}
            </div>

          </motion.div>
        </div>

        {/* CTA Devis - full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 rounded-sm border border-gold/20 overflow-hidden
                     bg-white/[0.06] py-12 px-8 text-center"
        >
          <p className="font-display text-2xl md:text-3xl text-ivory tracking-wide mb-6">
            {t('contact.cta_event')}
          </p>
          <Link
            to="/evenementiel#quote"
            className="inline-block px-10 py-3.5 bg-gold text-leather font-body text-sm tracking-wider uppercase
                       hover:bg-gold/90 transition-all duration-300 rounded-sm"
          >
            {t('contact.cta_quote')}
          </Link>
          <p className="text-sand/60 text-xs mt-4 font-body">{t('contact.cta_response')}</p>
        </motion.div>
      </div>
    </section>
  )
}
