import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function PrivacyPage() {
  const { t } = useTranslation()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const sections = [
    { title: t('privacy.collect_title'), text: t('privacy.collect_text') },
    { title: t('privacy.use_title'), text: t('privacy.use_text') },
    { title: t('privacy.retention_title'), text: t('privacy.retention_text') },
    { title: t('privacy.rights_title'), text: t('privacy.rights_text') },
    { title: t('privacy.cookies_title'), text: t('privacy.cookies_text') },
  ]

  return (
    <div className="bg-leather min-h-screen pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-4xl text-ivory tracking-wide mb-4">
          {t('privacy.title')}
        </h1>
        <p className="text-sand/50 text-sm font-body mb-12">{t('privacy.intro')}</p>
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
