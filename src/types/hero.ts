import type { SanityImageSource } from '@sanity/image-url'

export interface HeroContent {
  _id: string
  tagline: { fr: string; en: string }
  subtitle: { fr: string; en: string }
  backgroundImage: SanityImageSource
  videoUrl?: string | null
}
