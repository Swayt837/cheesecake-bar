import { motion } from 'framer-motion'
import { cn } from '@/utils'
import { type ReactNode } from 'react'

interface OccasionCardProps {
  icon: ReactNode
  title: string
  description?: string
  className?: string
}

export function OccasionCard({ icon, title, description, className }: OccasionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'card-premium flex flex-col items-center text-center gap-3 p-8',
        className
      )}
    >
      <div className="text-gold text-3xl">{icon}</div>
      <h3 className="font-display text-lg text-ivory">{title}</h3>
      {description && (
        <p className="body-secondary text-sm">{description}</p>
      )}
    </motion.div>
  )
}
