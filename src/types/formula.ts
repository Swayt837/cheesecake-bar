export interface Formula {
  _id: string
  name: { fr: string; en: string }
  slug: string
  description: { fr: string; en: string }
  idealFor: { fr: string; en: string }
  features: string[]
  order: number
}
