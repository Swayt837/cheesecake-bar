import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLanguage, useSanity } from '@/hooks'
import type { Product } from '@/types'
import { PRODUCTS_QUERY } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/imageBuilder'

// Fallback placeholders
const placeholderCups = [
  {
    _id: 'cup-1',
    name: { fr: 'Classic New York', en: 'Classic New York' },
    description: { fr: 'Le classique intemporel, base spéculoos', en: 'The timeless classic, speculoos base' },
    flavors: ['vanille', 'spéculoos'],
    color: '#F5E6D3',
    image: null as null,
  },
  {
    _id: 'cup-2',
    name: { fr: 'Fruits Rouges', en: 'Red Berries' },
    description: { fr: 'Explosion de fruits rouges frais', en: 'Fresh red berries explosion' },
    flavors: ['framboise', 'fraise', 'myrtille'],
    color: '#C44569',
    image: null as null,
  },
  {
    _id: 'cup-3',
    name: { fr: 'Mangue Passion', en: 'Mango Passion' },
    description: { fr: 'Saveurs exotiques du soleil', en: 'Exotic sun-kissed flavors' },
    flavors: ['mangue', 'passion'],
    color: '#F8B739',
    image: null as null,
  },
  {
    _id: 'cup-4',
    name: { fr: 'Chocolat Intense', en: 'Intense Chocolate' },
    description: { fr: 'Pour les amateurs de cacao', en: 'For cocoa lovers' },
    flavors: ['chocolat noir', 'cacao'],
    color: '#4A2C2A',
    image: null as null,
  },
  {
    _id: 'cup-5',
    name: { fr: 'Pistache Élégance', en: 'Pistachio Elegance' },
    description: { fr: 'Douceur raffinée à la pistache', en: 'Refined pistachio delight' },
    flavors: ['pistache'],
    color: '#93C572',
    image: null as null,
  },
  {
    _id: 'cup-6',
    name: { fr: 'Caramel Beurre Salé', en: 'Salted Caramel' },
    description: { fr: 'Douceur caramélisée et fleur de sel', en: 'Caramelized sweetness with sea salt' },
    flavors: ['caramel', 'fleur de sel'],
    color: '#D4A054',
    image: null as null,
  },
]

type CardItem = {
  _id: string
  name: { fr: string; en: string }
  description: { fr: string; en: string }
  flavors: string[]
  color?: string
  image: any
}

function Card3D({ item, position, onClick }: { item: CardItem; position: number; onClick?: () => void }) {
  const { currentLanguage } = useLanguage()

  // position: -2, -1, 0 (center), 1, 2
  const isCenter = position === 0

  const variants = {
    center: {
      x: 0,
      scale: 1,
      z: 0,
      opacity: 1,
      rotateY: 0,
      filter: 'brightness(1)',
    },
    left1: {
      x: '-55%',
      scale: 0.8,
      z: -150,
      opacity: 0.7,
      rotateY: 35,
      filter: 'brightness(0.6)',
    },
    left2: {
      x: '-95%',
      scale: 0.65,
      z: -300,
      opacity: 0.4,
      rotateY: 45,
      filter: 'brightness(0.4)',
    },
    right1: {
      x: '55%',
      scale: 0.8,
      z: -150,
      opacity: 0.7,
      rotateY: -35,
      filter: 'brightness(0.6)',
    },
    right2: {
      x: '95%',
      scale: 0.65,
      z: -300,
      opacity: 0.4,
      rotateY: -45,
      filter: 'brightness(0.4)',
    },
    hidden: {
      x: position < 0 ? '-120%' : '120%',
      scale: 0.5,
      z: -400,
      opacity: 0,
      rotateY: position < 0 ? 50 : -50,
      filter: 'brightness(0.3)',
    },
  }

  let variant = 'hidden'
  if (position === 0) variant = 'center'
  else if (position === -1) variant = 'left1'
  else if (position === -2) variant = 'left2'
  else if (position === 1) variant = 'right1'
  else if (position === 2) variant = 'right2'

  const hasSanityImage = item.image !== null

  return (
    <motion.div
      onClick={!isCenter && onClick ? onClick : undefined}
      className={`absolute left-1/2 top-0 w-[280px] md:w-[320px] ${isCenter ? 'cursor-default' : 'cursor-pointer'}`}
      style={{
        marginLeft: '-140px',
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
      initial={false}
      animate={variants[variant as keyof typeof variants]}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 20,
        mass: 0.8,
      }}
    >
      <div
        className={`relative overflow-hidden rounded-lg bg-leather-light border transition-all duration-500
          ${isCenter
            ? 'border-gold/40 shadow-[0_0_60px_rgba(201,164,92,0.25)]'
            : 'border-gold/20'
          }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Image */}
        <div className="aspect-[3/4] overflow-hidden relative">
          {hasSanityImage ? (
            <img
              src={urlFor(item.image).width(640).height(853).format('webp').url()}
              alt={item.name[currentLanguage]}
              className={`w-full h-full object-cover transition-transform duration-700 ${isCenter ? 'scale-100' : 'scale-110'}`}
              loading="lazy"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)` }}
            >
              <div
                className="w-32 h-32 rounded-full blur-xl"
                style={{ background: `radial-gradient(circle, ${item.color}80, transparent)` }}
              />
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-leather via-leather/20 to-transparent" />

          {/* Gold glow on center card */}
          {isCenter && (
            <div className="absolute inset-0 bg-gradient-to-t from-gold/10 via-transparent to-transparent opacity-0 animate-pulse" />
          )}
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <motion.div
            animate={{ opacity: isCenter ? 1 : 0.5, y: isCenter ? 0 : 5 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className={`font-display text-xl tracking-wide transition-colors duration-500
              ${isCenter ? 'text-gold' : 'text-ivory'}`}>
              {item.name[currentLanguage]}
            </h3>

            <AnimatePresence>
              {isCenter && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sand/75 text-xs mt-2 font-body leading-relaxed">
                    {item.description[currentLanguage]}
                  </p>

                  {item.flavors && item.flavors.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.flavors.map((flavor) => (
                        <span
                          key={flavor}
                          className="text-[10px] text-gold/70 border border-gold/20 px-2 py-0.5 rounded-full backdrop-blur-sm"
                        >
                          {flavor}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProductSlider() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { data: products } = useSanity<Product[]>(PRODUCTS_QUERY)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const hasSanityProducts = products && products.length > 0
  const items: CardItem[] = hasSanityProducts
    ? products.map((p) => ({ ...p, color: undefined }))
    : placeholderCups

  const count = items.length

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % count)
  }, [count])

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + count) % count)
  }, [count])

  // Autoplay
  useEffect(() => {
    if (count <= 1) return
    autoplayRef.current = setInterval(next, 5000)
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [next, count])

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(next, 5000)
  }

  const handlePrev = () => { prev(); resetAutoplay() }
  const handleNext = () => { next(); resetAutoplay() }

  // Drag / swipe
  const handleDragStart = (e: React.PointerEvent) => {
    setIsDragging(true)
    dragStartX.current = e.clientX
  }

  const handleDragEnd = (e: React.PointerEvent) => {
    if (!isDragging) return
    setIsDragging(false)
    const diff = e.clientX - dragStartX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) handlePrev()
      else handleNext()
    }
  }

  // Get position relative to active (-2..+2)
  const getPosition = (index: number) => {
    let diff = index - activeIndex
    // Wrap around
    if (diff > count / 2) diff -= count
    if (diff < -count / 2) diff += count
    return diff
  }

  // Visible range
  const visibleItems = items.map((item, i) => ({
    item,
    index: i,
    position: getPosition(i),
  })).filter((x) => Math.abs(x.position) <= 3)

  return (
    <section id="products" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
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
          <p className="text-sand/65 text-sm mt-4 font-body max-w-lg mx-auto">
            {t('products.subtitle')}
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* 3D Carousel */}
        <div
          className="relative h-[420px] md:h-[480px] mx-auto max-w-5xl select-none touch-pan-y"
          style={{ perspective: '1200px' }}
          onPointerDown={handleDragStart}
          onPointerUp={handleDragEnd}
          onPointerLeave={() => setIsDragging(false)}
        >
          {visibleItems
            .sort((a, b) => Math.abs(b.position) - Math.abs(a.position))
            .map(({ item, index, position }) => (
              <Card3D
                key={item._id}
                item={item}
                position={position}
                onClick={() => { setActiveIndex(index); resetAutoplay() }}
              />
            ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center
                       text-gold/60 hover:text-gold hover:border-gold/50 hover:bg-gold/5
                       transition-all duration-300 cursor-pointer"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); resetAutoplay() }}
                className={`transition-all duration-300 rounded-full cursor-pointer
                  ${i === activeIndex
                    ? 'w-8 h-2 bg-gold'
                    : 'w-2 h-2 bg-gold/30 hover:bg-gold/50'
                  }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center
                       text-gold/60 hover:text-gold hover:border-gold/50 hover:bg-gold/5
                       transition-all duration-300 cursor-pointer"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
