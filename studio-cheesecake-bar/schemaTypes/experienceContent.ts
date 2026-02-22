import {defineType, defineField} from 'sanity'

export const experienceContent = defineType({
  name: 'experienceContent',
  title: 'Expérience Bar',
  type: 'document',
  fields: [
    defineField({
      name: 'video',
      title: 'Vidéo du Flair Show',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Uploadez une vidéo pour la section Expérience Bar.',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Expérience Bar'}
    },
  },
})
