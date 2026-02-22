import {defineType, defineField} from 'sanity'

export const formula = defineType({
  name: 'formula',
  title: 'Formule',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'object',
      fields: [
        {name: 'fr', title: 'Francais', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name.fr', maxLength: 96},
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'fr', title: 'Francais', type: 'text', options: {rows: 2} as any},
        {name: 'en', title: 'English', type: 'text', options: {rows: 2} as any},
      ],
    }),
    defineField({
      name: 'idealFor',
      title: 'Ideal pour',
      type: 'object',
      fields: [
        {name: 'fr', title: 'Francais', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'features',
      title: 'Caracteristiques',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name.fr', subtitle: 'idealFor.fr'},
  },
})
