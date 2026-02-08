import { useState, useRef, useEffect } from 'react'
import { cn } from '@/utils'

interface VideoPlayerProps {
  src: string
  poster?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  className?: string
}

export function VideoPlayer({
  src,
  poster,
  autoPlay = false,
  muted = false,
  loop = false,
  className,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Lazy load: only load video when visible
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden rounded-sm bg-leather-light', className)}
    >
      {isVisible ? (
        <>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            autoPlay={autoPlay}
            muted={autoPlay || muted}
            loop={loop}
            playsInline
            controls={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover"
          />

          {/* Play button overlay */}
          {!isPlaying && !autoPlay && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40 cursor-pointer"
              aria-label="Lire la vidéo"
            >
              <div className="w-16 h-16 bg-gold/90 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                <svg className="w-7 h-7 text-leather ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </>
      ) : (
        // Placeholder before lazy load
        <div className="aspect-video bg-leather-light flex items-center justify-center">
          {poster ? (
            <img src={poster} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-10 h-10 border-2 border-gold border-t-transparent rounded-full animate-spin" />
          )}
        </div>
      )}
    </div>
  )
}
