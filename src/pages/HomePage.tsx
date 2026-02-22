import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '@/components/sections/Hero'
import { ProductSlider } from '@/components/sections/ProductSlider'
import { PricingSection } from '@/components/sections/PricingSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { SEOHead, SchemaOrg } from '@/components/seo'

export default function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }, [hash])

  return (
    <>
      <SEOHead
        title="Accueil"
        description="Cheesecake Cups Premium — Box de cheesecake cups artisanaux livrés sur la Côte d'Azur. Commandez vos box 4 ou 6 cups."
        path="/"
      />
      <SchemaOrg />
      <Hero />
      <ProductSlider />
      <PricingSection />
      <ContactSection />
    </>
  )
}
