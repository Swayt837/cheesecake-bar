import type { SanityImageSource } from '@sanity/image-url'

export interface EventGalleryItem {
  _id: string
  title: { fr: string; en: string }
  image: SanityImageSource
  category: 'particulier' | 'entreprise'
  order: number
}
