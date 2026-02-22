import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function TermsPage() {
  const { t } = useTranslation()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const sections = [
    { title: t('terms.scope_title'), text: t('terms.scope_text') },
    { title: t('terms.order_title'), text: t('terms.order_text') },
    { title: t('terms.pricing_title'), text: t('terms.pricing_text') },
    { title: t('terms.delivery_title'), text: t('terms.delivery_text') },
    { title: t('terms.cancel_title'), text: t('terms.cancel_text') },
    { title: t('terms.liability_title'), text: t('terms.liability_text') },
  ]

  return (
    <div className="bg-leather min-h-screen pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-4xl text-ivory tracking-wide mb-12">
          {t('terms.title')}
        </h1>
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl text-gold mb-3">{s.title}</h2>
              <p className="text-sand/70 text-sm font-body leading-relaxed whitespace-pre-line">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
