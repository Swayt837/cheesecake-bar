import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/Button'
import { Toast } from '@/components/ui/Toast'
import { cn } from '@/utils'

// --- Zod schema ---
const quoteSchema = z.object({
  type: z.enum(['particulier', 'entreprise']),
  date: z.string().min(1, 'required'),
  city: z.string().min(2, 'min_2'),
  guests: z
    .number({ error: 'required' })
    .min(1, 'min_1')
    .max(500, 'max_500'),
  formula: z.enum(['dropoff', 'bar', 'signature']),
  message: z.string().optional(),
  contact: z.string().min(5, 'min_5'),
  // honeypot
  website: z.string().max(0).optional(),
})

type QuoteFormData = z.infer<typeof quoteSchema>

// --- Helpers ---
function isFutureDate(dateStr: string): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return new Date(dateStr) >= today
}

const inputClass =
  'w-full bg-leather-dark/50 border border-gold/15 text-ivory px-5 py-3.5 rounded-sm ' +
  'placeholder:text-sand/30 focus:outline-none focus:border-gold/60 focus:shadow-[0_0_15px_rgba(201,164,92,0.08)] ' +
  'transition-all duration-300 font-body text-sm'

const labelClass = 'block text-sand/80 text-xs mb-2 font-body tracking-wider uppercase'
const errorClass = 'text-red-400/80 text-xs mt-1.5 font-body'

export function QuoteForm() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const lastSubmitRef = useRef(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    defaultValues: {
      type: 'particulier',
      formula: 'dropoff',
      date: '',
      city: '',
      guests: undefined,
      message: '',
      contact: '',
      website: '',
    },
  })

  const onSubmit = async (data: QuoteFormData) => {
    // Honeypot check
    if (data.website) return

    // Rate limit: 30s
    const now = Date.now()
    if (now - lastSubmitRef.current < 30_000) {
      setToast({ type: 'error', message: t('quote_form.rate_limit', 'Veuillez patienter avant de renvoyer.') })
      return
    }

    // Future date check
    if (!isFutureDate(data.date)) {
      setToast({ type: 'error', message: t('quote_form.date_future', 'La date doit être dans le futur.') })
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default_template',
        {
          type: data.type,
          date: data.date,
          city: data.city,
          guests: String(data.guests),
          formula: data.formula,
          message: data.message || '—',
          contact: data.contact,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      )

      lastSubmitRef.current = now
      setToast({ type: 'success', message: t('quote_form.success') })
      reset()
    } catch {
      setToast({ type: 'error', message: t('quote_form.error') })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Manual validation with Zod (since @hookform/resolvers uses zod v3 API)
  const onFormSubmit = handleSubmit((data) => {
    const result = quoteSchema.safeParse(data)
    if (!result.success) return
    onSubmit(result.data)
  })

  return (
    <section id="quote" className="relative py-24 md:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-leather via-leather-dark to-leather" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,164,92,0.04),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold/60 font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Devis
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-ivory tracking-wide">
            {t('quote_form.title')}
          </h2>
          <p className="text-sand/60 text-sm mt-4 font-body">{t('quote_form.subtitle')}</p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={onFormSubmit}
          className="space-y-6 bg-leather-light/30 border border-gold/10 rounded-sm p-8 md:p-10 backdrop-blur-sm"
          noValidate
        >
          {/* Honeypot - hidden */}
          <div className="absolute opacity-0 h-0 overflow-hidden" aria-hidden="true">
            <input tabIndex={-1} autoComplete="off" {...register('website')} />
          </div>

          {/* Type */}
          <fieldset>
            <legend className={labelClass}>{t('quote_form.type')}</legend>
            <div className="flex gap-3 mt-1">
              {(['particulier', 'entreprise'] as const).map((val) => (
                <label
                  key={val}
                  className={cn(
                    'flex-1 text-center py-3 border rounded-sm cursor-pointer transition-all duration-300 text-sm font-body tracking-wide',
                    'border-gold/15 text-sand/60 hover:border-gold/30 hover:text-sand',
                    '[&:has(input:checked)]:border-gold/50 [&:has(input:checked)]:text-gold [&:has(input:checked)]:bg-gold/5'
                  )}
                >
                  <input type="radio" value={val} className="sr-only" {...register('type')} />
                  {t(`quote_form.type_${val}`)}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Date + City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>{t('quote_form.date')}</label>
              <input
                type="date"
                className={cn(inputClass, errors.date && 'border-red-400/50')}
                {...register('date', { required: true })}
              />
              {errors.date && <p className={errorClass}>{t('quote_form.date')}</p>}
            </div>
            <div>
              <label className={labelClass}>{t('quote_form.city')}</label>
              <input
                type="text"
                placeholder="Nice, Cannes..."
                className={cn(inputClass, errors.city && 'border-red-400/50')}
                {...register('city', { required: true, minLength: 2 })}
              />
              {errors.city && <p className={errorClass}>{t('quote_form.city')}</p>}
            </div>
          </div>

          {/* Guests + Formula */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>{t('quote_form.guests')}</label>
              <input
                type="number"
                min={1}
                max={500}
                placeholder="50"
                className={cn(inputClass, errors.guests && 'border-red-400/50')}
                {...register('guests', { required: true, valueAsNumber: true, min: 1, max: 500 })}
              />
              {errors.guests && <p className={errorClass}>{t('quote_form.guests')}</p>}
            </div>
            <div>
              <label className={labelClass}>{t('quote_form.formula')}</label>
              <select
                className={cn(inputClass, 'cursor-pointer', errors.formula && 'border-red-400/50')}
                {...register('formula', { required: true })}
              >
                <option value="dropoff">{t('formulas.dropoff.name')}</option>
                <option value="bar">{t('formulas.bar.name')}</option>
                <option value="signature">{t('formulas.signature.name')}</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className={labelClass}>{t('quote_form.message')}</label>
            <textarea
              rows={4}
              placeholder={t('quote_form.message_placeholder')}
              className={inputClass}
              {...register('message')}
            />
          </div>

          {/* Contact */}
          <div>
            <label className={labelClass}>{t('quote_form.contact')}</label>
            <input
              type="text"
              placeholder={t('quote_form.contact_placeholder')}
              className={cn(inputClass, errors.contact && 'border-red-400/50')}
              {...register('contact', { required: true, minLength: 5 })}
            />
            {errors.contact && <p className={errorClass}>{t('quote_form.contact')}</p>}
          </div>

          {/* Submit */}
          <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full">
            {t('quote_form.submit')}
          </Button>
        </motion.form>
      </div>

      {/* Toast */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          isVisible={!!toast}
          onClose={() => setToast(null)}
        />
      )}

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
