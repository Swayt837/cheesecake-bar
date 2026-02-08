import type { SanityImageSource } from '@sanity/image-url'

export interface Product {
  _id: string
  name: { fr: string; en: string }
  slug: string
  category: 'cup' | 'whole'
  format: string
  price: number
  description: { fr: string; en: string }
  image: SanityImageSource
  flavors: string[]
}
