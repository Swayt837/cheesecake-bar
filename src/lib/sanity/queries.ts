export const PRODUCTS_QUERY = `*[_type == "product"] | order(category asc, name.fr asc) {
  _id,
  name,
  slug,
  category,
  format,
  price,
  description,
  image,
  flavors
}`

export const FORMULAS_QUERY = `*[_type == "formula"] | order(order asc) {
  _id,
  name,
  slug,
  description,
  idealFor,
  features,
  order
}`

export const HERO_QUERY = `*[_type == "heroContent"][0] {
  _id,
  tagline,
  subtitle,
  backgroundImage,
  videoUrl
}`

export const EVENT_GALLERY_QUERY = `*[_type == "eventGallery"] | order(order asc) {
  _id,
  title,
  image,
  category,
  order
}`
