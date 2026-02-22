import {defineType, defineField} from 'sanity'

export const aboutContent = defineType({
  name: 'aboutContent',
  title: 'Notre Histoire',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo fondateur',
      type: 'image',
      options: {hotspot: true},
      description: 'Photo affichée dans la section Notre Histoire.',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Notre Histoire'}
    },
  },
})
