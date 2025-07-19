'use client'

import { useState, useEffect } from 'react'

export default function DatabaseStatus() {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading')
  const [message, setMessage] = useState('Checking database connection...')

  useEffect(() => {
    const checkDatabaseConnection = async () => {
      try {
        const response = await fetch('/api/db-status')
        const data = await response.json()
        
        if (data.status === 'connected') {
          setStatus('connected')
          setMessage(`Connected to ${data.database} database`)
        } else {
          setStatus('error')
          setMessage(data.message || 'Failed to connect to database')
        }
      } catch (error) {
        setStatus('error')
        setMessage('Failed to check database connection')
      }
    }

    checkDatabaseConnection()
  }, [])

  return (
    <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
      status === 'connected' ? 'bg-green-100 text-green-800' :
      status === 'error' ? 'bg-red-100 text-red-800' :
      'bg-blue-100 text-blue-800'
    }`}>
      <div className={`w-3 h-3 rounded-full ${
        status === 'connected' ? 'bg-green-500' :
        status === 'error' ? 'bg-red-500' :
        'bg-blue-500 animate-pulse'
      }`}></div>
      <span className="text-sm font-medium">{message}</span>
    </div>
  )
}