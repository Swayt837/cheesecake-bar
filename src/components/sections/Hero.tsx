import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSanity } from '@/hooks'
import type { HeroContent } from '@/types'
import { urlFor } from '@/lib/sanity/imageBuilder'
import { HERO_QUERY } from '@/lib/sanity/queries'
import { Button } from '@/components/ui/Button'

const INSTAGRAM_URL = 'https://instagram.com/cheesecakebar_riviera'

export function Hero() {
  const { t } = useTranslation()
  const { data: hero } = useSanity<HeroContent>(HERO_QUERY)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const bgImage = hero?.backgroundImage ? urlFor(hero.backgroundImage).width(1920).format('webp').url() : undefined
  const videoUrl = hero?.videoUrl || ''

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-dvh h-dvh flex items-center justify-start overflow-hidden">
      {/* Fullscreen Video / Image Background */}
      <div className="absolute inset-0">
        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 min-w-full min-h-full w-auto h-auto object-cover scale-[1.15] sm:scale-100"
            poster={bgImage}
          />
        ) : bgImage ? (
          <img src={bgImage} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-leather-dark via-leather to-leather-light" />
        )}

        {/* Overlay for text readability - stronger on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-leather/80 via-leather/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-leather/30 via-transparent to-leather/50" />
      </div>

      {/* Content - middle left */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-20 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory tracking-wide leading-tight"
        >
          Cheesecake Cups
          <span className="block text-gold">Premium</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sand/70 text-sm md:text-base mt-4 font-body tracking-wide"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 mt-6"
        >
          {/* Commander maintenant → Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="w-full">
              {t('hero.cta_order')}
            </Button>
          </a>
          {/* Découvrir nos créations → scroll products */}
          <Button variant="outline" size="sm" onClick={() => scrollToSection('products')}>
            {t('hero.cta_discover')}
          </Button>
        </motion.div>
      </div>

      {/* Mute/Unmute toggle */}
      {videoUrl && (
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-ivory/20 bg-leather/50 backdrop-blur-sm text-ivory/70 hover:text-ivory hover:border-gold/40 transition-colors"
          aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      )}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-9 border-2 border-ivory/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-1 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
