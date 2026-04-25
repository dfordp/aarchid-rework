'use client'

import { useState, FormEvent, ChangeEvent } from 'react'

interface WaitlistFormProps {
  variant?: 'light' | 'dark'
}

type Status = 'idle' | 'loading' | 'success' | 'error' | 'duplicate'

export function WaitlistForm({ variant = 'light' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  const isDark = variant === 'dark'

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role: 'teacher' }),
      })

      const data = await response.json()

      if (response.status === 201) {
        setStatus('success')
        setMessage('You\'re in')
        setEmail('')
      } else if (response.status === 409) {
        setStatus('duplicate')
        setMessage('Already on the waitlist')
      } else if (response.status === 400) {
        setStatus('error')
        setMessage(data.error || 'Valid email required')
      } else {
        setStatus('error')
        setMessage('Something went wrong')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong')
    }
  }

  const inputBgClass = isDark
    ? 'bg-[rgba(255,255,255,0.1)]'
    : 'bg-[#F7F5F0]'
  const inputBorderClass = isDark
    ? 'border-[rgba(237,237,228,0.3)]'
    : 'border-[#495C47]'
  const inputTextClass = isDark ? 'text-[#EDEDE4]' : 'text-[#224234]'
  const inputPlaceholderClass = isDark
    ? 'placeholder-[rgba(237,237,228,0.5)]'
    : 'placeholder-[rgba(73,92,71,0.6)]'

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          disabled={status === 'success'}
          className={`flex-1 h-11 sm:h-12 px-4 sm:px-5 rounded-lg border font-Lufga text-sm sm:text-base transition-all duration-300 focus:outline-none ${inputBgClass} ${inputBorderClass} ${inputTextClass} ${inputPlaceholderClass} ${isDark ? 'focus:border-[#EDEDE4]' : 'focus:border-[#224234]'}`}
          required
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={`h-11 sm:h-12 px-8 sm:px-10 w-full sm:w-auto rounded-lg font-Lufga text-base sm:text-base tracking-wider transition-all duration-300 flex items-center justify-center ${
            status === 'success'
              ? isDark
                ? 'bg-transparent border border-[#EDEDE4] text-[#EDEDE4] cursor-default'
                : 'bg-transparent border border-[#224234] text-[#224234] cursor-default'
              : isDark
                ? 'bg-[#EDEDE4] text-[#224234] hover:bg-[#D0CCBF]'
                : 'bg-[#224234] text-[#EDEDE4] hover:bg-[#495C47]'
          }`}
          style={{ fontWeight: 700 }}
        >
          {status === 'loading' ? 'Joining...' : status === 'success' ? 'You\'re in' : 'Join'}
        </button>
      </div>
      {message && (
        <p
          className={`text-xs sm:text-sm font-Lufga ${
            status === 'success'
              ? 'text-[#224234]'
              : status === 'error'
                ? 'text-[#8B3A3A]'
                : 'text-[#495C47]'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  )
}
