import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function MentionsLegalesPage() {
  const { t } = useTranslation()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const sections = [
    { title: t('legal.editor'), text: t('legal.editor_text') },
    { title: t('legal.hosting'), text: t('legal.hosting_text') },
    { title: t('legal.ip'), text: t('legal.ip_text') },
    { title: t('legal.data'), text: t('legal.data_text') },
  ]

  return (
    <div className="bg-leather min-h-screen pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-4xl text-ivory tracking-wide mb-12">
          {t('legal.title')}
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
