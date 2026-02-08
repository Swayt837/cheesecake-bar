import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSanity, useLanguage } from '@/hooks'
import type { EventGalleryItem } from '@/types'
import { EVENT_GALLERY_QUERY } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/imageBuilder'
import { Modal } from '@/components/ui/Modal'
import { Loader } from '@/components/ui/Loader'

interface EventGalleryProps {
  category?: 'particulier' | 'entreprise'
}

export function EventGallery({ category }: EventGalleryProps) {
  const { t } = useTranslation()
  const { currentLanguage } = useLanguage()
  const { data: items, loading } = useSanity<EventGalleryItem[]>(EVENT_GALLERY_QUERY)
  const [selectedImage, setSelectedImage] = useState<EventGalleryItem | null>(null)

  const filtered = items?.filter((item) =>
    category ? item.category === category : true
  )

  if (loading) return <Loader variant="inline" />
  if (!filtered || filtered.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {filtered.map((item, i) => (
          <motion.button
            key={item._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            onClick={() => setSelectedImage(item)}
            className="relative aspect-square overflow-hidden rounded-sm cursor-pointer group"
          >
            <img
              src={urlFor(item.image).width(400).height(400).format('webp').url()}
              alt={item.title?.[currentLanguage] || t('products.title')}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-leather/0 group-hover:bg-leather/40 transition-colors duration-300 flex items-end p-3">
              <span className="text-ivory text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {item.title?.[currentLanguage]}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.title?.[currentLanguage]}
      >
        {selectedImage && (
          <img
            src={urlFor(selectedImage.image).width(800).format('webp').url()}
            alt={selectedImage.title?.[currentLanguage] || ''}
            className="w-full rounded-sm"
          />
        )}
      </Modal>
    </>
  )
}
