import { useState, useEffect } from 'react'
import { sanityClient } from '@/lib/sanity/client'

interface UseSanityResult<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useSanity<T>(query: string): UseSanityResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(!!sanityClient)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!sanityClient) return

    let cancelled = false

    sanityClient
      .fetch<T>(query)
      .then((result) => {
        if (!cancelled) {
          setData(result)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Fetch error')
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [query])

  return { data, loading, error }
}
