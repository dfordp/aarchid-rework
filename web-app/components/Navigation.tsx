'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 md:px-8 pt-4 md:pt-6">
      {/* Navbar Container with margins and rounded corners */}
      <nav
        className={`w-4/5 rounded-2xl ${isScrolled ? 'border-transparent' : 'border'} texture-noise-light transition-all duration-300`}
        style={{
          backgroundColor: isScrolled ? 'rgba(237, 237, 228, 0.1)' : 'rgba(237, 237, 228, 0.95)',
          backdropFilter: isScrolled ? 'blur(4px)' : 'blur(12px)',
          borderColor: isScrolled ? 'transparent' : 'rgba(73, 92, 71, 0.2)',
          boxShadow: isScrolled ? 'none' : '0 4px 24px rgba(34, 66, 52, 0.08)',
        }}
      >
        <div className="flex md:grid grid-cols-12 gap-2 md:gap-4 items-center justify-between md:justify-start px-4 md:px-8 py-3 md:py-4 h-16 md:h-18 shadow-2xs">
          {/* Logo - Left Section (columns 1-2) */}
          <div className="md:col-span-2">
            <Link href="/" className="font-Lufga font-medium text-xl md:text-2xl transition-all hover:opacity-80" style={{ color: '#224234', letterSpacing: '-0.07em' }}>
              aarchid
            </Link>
          </div>

          {/* Navigation Links - Center Section (hidden on mobile) */}
          <div className="hidden md:flex md:col-span-7 items-center justify-center gap-8">
            <Link
              href="/blogs"
              className="font-Lufga text-sm font-medium transition-all hover:opacity-70"
              style={{ color: '#495C47' }}
            >
              Blogs
            </Link>
            <Link
              href="/plants"
              className="font-Lufga text-sm font-medium transition-all hover:opacity-70"
              style={{ color: '#495C47' }}
            >
              Plants
            </Link>
          </div>

          {/* Mobile Burger Menu - Shown on small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              style={{ color: '#224234' }}
            >
              <span className={`w-5 h-0.5 block transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: '#224234' }} />
              <span className={`w-5 h-0.5 block transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: '#224234' }} />
              <span className={`w-5 h-0.5 block transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: '#224234' }} />
            </button>
          </div>

          {/* CTA Button - Right Section (hidden on mobile) */}
          <div className="hidden md:flex md:col-span-3 justify-end">
            <button
              onClick={() => {
                document
                  .getElementById('waitlist-section')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-5 md:px-7 py-2 rounded-lg font-Lufga text-xs md:text-sm font-bold tracking-wider transition-all duration-300 text-[#EDEDE4]"
              style={{
                backgroundColor: '#224234',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#495C47')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#224234')}
            >
              Join Waitlist
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: 'rgba(73, 92, 71, 0.2)' }}>
            <div className="px-4 py-4 flex flex-col gap-3">
              <Link
                href="/blogs"
                className="font-Lufga text-sm font-medium transition-all hover:opacity-70"
                style={{ color: '#495C47' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/plants"
                className="font-Lufga text-sm font-medium transition-all hover:opacity-70"
                style={{ color: '#495C47' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plants
              </Link>
              <button
                onClick={() => {
                  document
                    .getElementById('waitlist-section')
                    ?.scrollIntoView({ behavior: 'smooth' })
                  setIsMobileMenuOpen(false)
                }}
                className="w-full px-5 py-2.5 rounded-lg font-Lufga text-sm font-bold tracking-wider transition-all duration-300 text-[#EDEDE4] mt-2"
                style={{
                  backgroundColor: '#224234',
                }}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
