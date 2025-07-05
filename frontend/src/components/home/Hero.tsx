import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/lib/translations'

export function Hero() {
  const [currentLang, setCurrentLang] = useState('en')
  const { t } = useTranslation(currentLang)

  useEffect(() => {
    const handleLanguageChange = (event: any) => {
      setCurrentLang(event.detail)
    }
    
    const savedLang = localStorage.getItem('language') || 'en'
    setCurrentLang(savedLang)
    
    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container-custom py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/products" className="btn-primary bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              🛍️ {t('shopNow')}
            </Link>
            <Link href="/categories" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              📂 {t('browseCategories')}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-10 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-10 translate-y-32 -translate-x-32"></div>
    </section>
  )
}