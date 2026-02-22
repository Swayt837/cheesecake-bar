import {defineType, defineField} from 'sanity'

export const heroContent = defineType({
  name: 'heroContent',
  title: 'Hero (Page d\'accueil)',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'object',
      fields: [
        {name: 'fr', title: 'Francais', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'object',
      fields: [
        {name: 'fr', title: 'Francais', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Image de fond',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'video',
      title: 'Vidéo de fond (MP4)',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Uploadez une vidéo pour le fond du hero. Prioritaire sur l\'image.',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Hero - Page d\'accueil'}
    },
  },
})
