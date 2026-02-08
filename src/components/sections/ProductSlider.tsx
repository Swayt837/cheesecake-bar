import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { useLanguage } from '@/hooks'
import { useSanity } from '@/hooks'
import type { Product } from '@/types'
import { PRODUCTS_QUERY } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/imageBuilder'

// Placeholder cups - no individual price shown
const placeholderCups = [
  {
    _id: 'cup-1',
    name: { fr: 'Classic New York', en: 'Classic New York' },
    format: 'Cup',
    description: { fr: 'Le classique intemporel, base spéculoos', en: 'The timeless classic, speculoos base' },
    image: null,
    flavors: ['vanille', 'spéculoos'],
    color: '#F5E6D3',
  },
  {
    _id: 'cup-2',
    name: { fr: 'Fruits Rouges', en: 'Red Berries' },
    format: 'Cup',
    description: { fr: 'Explosion de fruits rouges frais', en: 'Fresh red berries explosion' },
    image: null,
    flavors: ['framboise', 'fraise', 'myrtille'],
    color: '#C44569',
  },
  {
    _id: 'cup-3',
    name: { fr: 'Mangue Passion', en: 'Mango Passion' },
    format: 'Cup',
    description: { fr: 'Saveurs exotiques du soleil', en: 'Exotic sun-kissed flavors' },
    image: null,
    flavors: ['mangue', 'passion'],
    color: '#F8B739',
  },
  {
    _id: 'cup-4',
    name: { fr: 'Chocolat Intense', en: 'Intense Chocolate' },
    format: 'Cup',
    description: { fr: 'Pour les amateurs de cacao', en: 'For cocoa lovers' },
    image: null,
    flavors: ['chocolat noir', 'cacao'],
    color: '#4A2C2A',
  },
  {
    _id: 'cup-5',
    name: { fr: 'Pistache Élégance', en: 'Pistachio Elegance' },
    format: 'Cup',
    description: { fr: 'Douceur raffinée à la pistache', en: 'Refined pistachio delight' },
    image: null,
    flavors: ['pistache'],
    color: '#93C572',
  },
  {
    _id: 'cup-6',
    name: { fr: 'Caramel Beurre Salé', en: 'Salted Caramel' },
    format: 'Cup',
    description: { fr: 'Douceur caramélisée et fleur de sel', en: 'Caramelized sweetness with sea salt' },
    image: null,
    flavors: ['caramel', 'fleur de sel'],
    color: '#D4A054',
  },
]

interface PlaceholderCup {
  _id: string
  name: { fr: string; en: string }
  format: string
  description: { fr: string; en: string }
  image: null
  flavors: string[]
  color: string
}

function CupCard({ cup, index }: { cup: PlaceholderCup; index: number }) {
  const { currentLanguage } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-sm bg-leather-light border border-gold/10
                      transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-[0_0_40px_rgba(201,164,92,0.15)]">
        {/* Image / Placeholder */}
        <div className="aspect-[3/4] overflow-hidden relative">
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${cup.color}15, ${cup.color}35)` }}
          >
            <div
              className="w-28 h-28 rounded-full opacity-50 blur-sm"
              style={{ background: `radial-gradient(circle, ${cup.color}, transparent)` }}
            />
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-leather via-transparent to-transparent opacity-80" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display text-xl text-ivory tracking-wide group-hover:text-gold transition-colors duration-300">
            {cup.name[currentLanguage]}
          </h3>
          <p className="text-sand/50 text-xs mt-1.5 font-body leading-relaxed">
            {cup.description[currentLanguage]}
          </p>

          {/* Flavors */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {cup.flavors.map((flavor) => (
              <span
                key={flavor}
                className="text-xs text-gold/60 border border-gold/15 px-2 py-0.5 rounded-sm"
              >
                {flavor}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProductSlider() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="products" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-leather via-leather-light/30 to-leather" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <span className="text-gold/60 font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory tracking-wide">
            {t('products.title')}
          </h2>
          <p className="text-sand/50 text-sm mt-4 font-body max-w-lg mx-auto">
            {t('products.subtitle')}
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* 3D Coverflow Slider */}
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 250,
            modifier: 1.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="w-full pb-16
                     [&_.swiper-pagination-bullet]:!bg-gold/30 [&_.swiper-pagination-bullet]:!w-2 [&_.swiper-pagination-bullet]:!h-2
                     [&_.swiper-pagination-bullet-active]:!bg-gold [&_.swiper-pagination-bullet-active]:!w-8 [&_.swiper-pagination-bullet-active]:!rounded-full
                     [&_.swiper-pagination-bullet-active]:!transition-all [&_.swiper-pagination-bullet-active]:!duration-300"
          breakpoints={{
            320: { slidesPerView: 1.3 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.5 },
          }}
        >
          {placeholderCups.map((cup, i) => (
            <SwiperSlide key={cup._id} className="!w-[280px] md:!w-[320px] py-4">
              <CupCard cup={cup} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
