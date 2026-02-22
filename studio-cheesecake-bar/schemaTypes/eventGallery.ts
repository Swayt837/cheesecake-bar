import {defineType, defineField} from 'sanity'

export const eventGallery = defineType({
  name: 'eventGallery',
  title: 'Galerie Evenements',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'object',
      fields: [
        {name: 'fr', title: 'Francais', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categorie',
      type: 'string',
      options: {
        list: [
          {title: 'Particulier', value: 'particulier'},
          {title: 'Entreprise', value: 'entreprise'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title.fr', subtitle: 'category', media: 'image'},
  },
})
