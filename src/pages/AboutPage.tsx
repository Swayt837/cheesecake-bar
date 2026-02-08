import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PhilosophySection } from '@/components/sections/PhilosophySection'
import { Button } from '@/components/ui/Button'
import { SEOHead } from '@/components/seo'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead
        title={t('about.title')}
        description="Découvrez l'histoire de Cheesecake Bar, notre passion pour la pâtisserie premium et le show flair sur la Côte d'Azur."
        path="/a-propos"
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
            {t('about.title')}
          </motion.h1>
        </div>
      </section>

      {/* Story section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/5] bg-leather-light border border-gold/20 rounded-sm overflow-hidden flex items-center justify-center"
          >
            <span className="text-sand/40 font-display text-lg">Photo fondateur</span>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h2 className="heading-2">{t('about.title')}</h2>
            <div className="gold-line" />
            <p className="body-text leading-relaxed">
              Passionné par la pâtisserie et le show, j'ai créé Cheesecake Bar
              pour réinventer le dessert événementiel sur la Côte d'Azur.
              Chaque cheesecake cup est un moment de plaisir, servi avec la
              technique du flair bartending pour un spectacle inoubliable.
            </p>
            <p className="body-text leading-relaxed">
              Nos ingrédients sont soigneusement sélectionnés, nos recettes
              développées avec exigence, et notre service pensé pour créer
              des souvenirs uniques à chaque événement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <PhilosophySection />

      {/* CTA */}
      <section className="section-container text-center">
        <div className="gold-line max-w-xs mx-auto mb-10" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/#creations">
            <Button size="lg">{t('hero.cta_discover')}</Button>
          </Link>
          <Link to="/#quote">
            <Button variant="outline" size="lg">{t('hero.cta_quote')}</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
