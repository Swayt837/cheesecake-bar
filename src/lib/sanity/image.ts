import type { SanityImageSource } from '@sanity/image-url'
import { urlFor } from './imageBuilder'

const WIDTHS = [320, 640, 960, 1280, 1920]

export function sanityImageProps(
  source: SanityImageSource,
  alt: string,
  sizes = '100vw'
) {
  const srcSet = WIDTHS.map(
    (w) => `${urlFor(source).width(w).format('webp').url()} ${w}w`
  ).join(', ')

  return {
    src: urlFor(source).width(960).format('webp').url(),
    srcSet,
    sizes,
    alt,
    loading: 'lazy' as const,
  }
}
