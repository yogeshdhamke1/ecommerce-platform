'use client'

import { useState, useEffect } from 'react'
import { GlobeAltIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' }
]

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1.0 },
  { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.85 },
  { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.73 },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', rate: 110.0 },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', rate: 1.25 },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rate: 1.35 }
]

export function LanguageCurrencySelector() {
  const [currentLang, setCurrentLang] = useState('en')
  const [currentCurrency, setCurrency] = useState('USD')
  const [showLangDropdown, setShowLangDropdown] = useState(false)
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false)

  useEffect(() => {
    // Load saved preferences
    const savedLang = localStorage.getItem('language') || 'en'
    const savedCurrency = localStorage.getItem('currency') || 'USD'
    setCurrentLang(savedLang)
    setCurrency(savedCurrency)
  }, [])

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    localStorage.setItem('language', langCode)
    setShowLangDropdown(false)
    // Trigger language change event
    window.dispatchEvent(new CustomEvent('languageChange', { detail: langCode }))
  }

  const handleCurrencyChange = (currencyCode: string) => {
    setCurrency(currencyCode)
    localStorage.setItem('currency', currencyCode)
    setShowCurrencyDropdown(false)
    // Trigger currency change event
    window.dispatchEvent(new CustomEvent('currencyChange', { detail: currencyCode }))
  }

  const currentLangData = languages.find(l => l.code === currentLang)
  const currentCurrencyData = currencies.find(c => c.code === currentCurrency)

  return (
    <div className="flex items-center space-x-2">
      {/* Language Selector */}
      <div className="relative">
        <button
          onClick={() => setShowLangDropdown(!showLangDropdown)}
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <span className="text-lg">{currentLangData?.flag}</span>
          <span className="text-sm font-medium hidden sm:block">{currentLangData?.code.toUpperCase()}</span>
        </button>
        
        {showLangDropdown && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 ${
                  currentLang === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Currency Selector */}
      <div className="relative">
        <button
          onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <CurrencyDollarIcon className="h-4 w-4" />
          <span className="text-sm font-medium">{currentCurrencyData?.code}</span>
        </button>
        
        {showCurrencyDropdown && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => handleCurrencyChange(currency.code)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 ${
                  currentCurrency === currency.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <div>
                  <span className="font-medium">{currency.code}</span>
                  <span className="text-sm text-gray-500 ml-2">{currency.symbol}</span>
                </div>
                <span className="text-sm text-gray-500">{currency.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Currency conversion utility
export const convertCurrency = (amount: number, fromCurrency = 'USD', toCurrency = 'USD') => {
  const fromRate = currencies.find(c => c.code === fromCurrency)?.rate || 1
  const toRate = currencies.find(c => c.code === toCurrency)?.rate || 1
  return (amount / fromRate) * toRate
}

// Format currency utility
export const formatCurrency = (amount: number, currencyCode = 'USD') => {
  const currency = currencies.find(c => c.code === currencyCode)
  if (!currency) return `$${amount.toFixed(2)}`
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2
  }).format(amount)
}