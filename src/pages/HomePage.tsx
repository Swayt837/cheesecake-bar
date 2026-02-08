import { Hero } from '@/components/sections/Hero'
import { ProductSlider } from '@/components/sections/ProductSlider'
import { PricingSection } from '@/components/sections/PricingSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { SEOHead, SchemaOrg } from '@/components/seo'

export default function HomePage() {
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
