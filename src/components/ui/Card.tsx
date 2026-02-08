import { type ReactNode } from 'react'
import { cn } from '@/utils'

interface CardProps {
  image?: string
  imageAlt?: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function Card({ image, imageAlt, children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-leather-light border border-gold/20 rounded-sm overflow-hidden',
        'transition-all duration-300 hover:border-gold/40 hover:shadow-xl',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {image && (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={imageAlt || ''}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  )
}
