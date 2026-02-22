import {defineType, defineField} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Produit',
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
      name: 'category',
      title: 'Categorie',
      type: 'string',
      options: {
        list: [
          {title: 'Cup individuelle', value: 'cup'},
          {title: 'Cheesecake entier', value: 'whole'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
      description: 'Ex: Cup, Box 4, Box 6, Cheesecake 8 pers...',
    }),
    defineField({
      name: 'price',
      title: 'Prix (EUR)',
      type: 'number',
      description: 'Laisser vide pour les cups individuelles (pas de prix affiche)',
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
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'flavors',
      title: 'Parfums',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Liste des parfums (ex: vanille, speculoos...)',
    }),
  ],
  preview: {
    select: {title: 'name.fr', subtitle: 'category', media: 'image'},
  },
})
