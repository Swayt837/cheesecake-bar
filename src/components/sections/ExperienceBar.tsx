import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'

export function ExperienceBar() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="experience" className="relative min-h-screen flex items-center overflow-hidden" ref={ref}>
      {/* Background - video placeholder or gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-leather-dark via-leather to-leather-light" />
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,164,92,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-leather/80 via-transparent to-leather/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Video placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-gold/20 relative group">
              {/* Placeholder - will be replaced by video */}
              <div className="w-full h-full bg-gradient-to-br from-leather-light to-leather flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 border-2 border-gold/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-gold transition-colors duration-300">
                    <svg className="w-8 h-8 text-gold/60 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-sand/40 text-sm font-body tracking-wider">FLAIR SHOW</p>
                </div>
              </div>

              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/40" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/40" />
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-gold/60 font-body text-sm tracking-[0.3em] uppercase mb-4 block">
                Live Show
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory tracking-wide leading-tight">
                {t('experience.title')}
              </h2>
            </div>

            <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent" />

            <p className="text-sand text-lg md:text-xl leading-relaxed font-body">
              {t('experience.description')}
            </p>

            {/* Stats / Highlights */}
            <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-gold/10">
              <div className="text-center">
                <span className="font-display text-3xl text-gold">15</span>
                <span className="text-gold text-lg">min</span>
                <p className="text-sand/60 text-xs mt-1 font-body">Show</p>
              </div>
              <div className="text-center">
                <span className="font-display text-3xl text-gold">100%</span>
                <p className="text-sand/60 text-xs mt-1 font-body">Wow effect</p>
              </div>
              <div className="text-center">
                <span className="font-display text-3xl text-gold">Live</span>
                <p className="text-sand/60 text-xs mt-1 font-body">Dressage</p>
              </div>
            </div>

            <Button size="lg" onClick={scrollToQuote} className="self-start">
              {t('experience.cta')}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
