import { cn } from '@/utils'

interface LoaderProps {
  variant?: 'fullscreen' | 'inline'
  text?: string
  className?: string
}

export function Loader({ variant = 'fullscreen', text, className }: LoaderProps) {
  const spinner = (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      {text && (
        <span className="text-sand text-sm font-body tracking-wider uppercase">{text}</span>
      )}
    </div>
  )

  if (variant === 'inline') return spinner

  return (
    <div className="min-h-screen bg-leather flex items-center justify-center">
      {spinner}
    </div>
  )
}
