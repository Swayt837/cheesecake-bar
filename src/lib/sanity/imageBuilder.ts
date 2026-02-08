import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'
import { sanityClient } from './client'

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    throw new Error('Sanity client not configured')
  }
  return builder.image(source)
}
