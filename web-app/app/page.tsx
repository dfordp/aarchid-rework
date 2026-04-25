import { WaitlistForm } from '@/components/WaitlistForm'
import { BentoGrid } from '@/components/BentoGrid'
import { ComparisonMatrix } from '@/components/ComparisonMatrix'
import { Navigation } from '@/components/Navigation'
import { PhoneMockup } from '@/components/PhoneMockup'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section
        className="px-8 md:px-12 texture-noise texture-linen texture-botanical-bg py-6"
        style={{
          backgroundColor: '#EDEDE4',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '120px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative botanical SVGs */}
        <svg
          style={{
            position: 'absolute',
            top: '10%',
            left: '-5%',
            width: '300px',
            height: '500px',
            opacity: 0.04,
            pointerEvents: 'none',
            zIndex: 0,
          }}
          viewBox="0 0 300 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M150 480 C150 480 50 400 30 280 C10 160 80 60 150 20 C220 60 290 160 270 280 C250 400 150 480 150 480Z"
            fill="#224234"
          />
          <path d="M150 20 C130 100 90 140 60 200" stroke="#EDEDE4" strokeWidth="1.5" opacity="0.4"/>
          <path d="M150 20 C170 100 210 140 240 200" stroke="#EDEDE4" strokeWidth="1.5" opacity="0.4"/>
          <path d="M150 20 C148 150 145 300 150 480" stroke="#EDEDE4" strokeWidth="1.5" opacity="0.4"/>
          <path d="M120 180 C130 170 150 165 160 175" stroke="#EDEDE4" strokeWidth="1" opacity="0.3"/>
          <path d="M100 250 C115 235 150 228 165 240" stroke="#EDEDE4" strokeWidth="1" opacity="0.3"/>
          <path d="M110 320 C125 305 150 298 168 310" stroke="#EDEDE4" strokeWidth="1" opacity="0.3"/>
        </svg>

        <svg
          style={{
            position: 'absolute',
            top: '5%',
            right: '-8%',
            width: '200px',
            height: '350px',
            opacity: 0.03,
            pointerEvents: 'none',
            zIndex: 0,
            transform: 'scaleX(-1) rotate(15deg)',
          }}
          viewBox="0 0 300 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M150 480 C150 480 50 400 30 280 C10 160 80 60 150 20 C220 60 290 160 270 280 C250 400 150 480 150 480Z"
            fill="#224234"
          />
          <path d="M150 20 C148 150 145 300 150 480" stroke="#EDEDE4" strokeWidth="1.5" opacity="0.4"/>
        </svg>

        {/* Hero Content Grid Container */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center relative z-10">
          
          {/* Left Column — Text Content (cols 1-6 on wide screens) */}
          <div className="col-span-1 lg:col-span-6">
            <p
              className="text-xs uppercase tracking-wider mb-6 font-Lufga"
              style={{ color: '#495C47', letterSpacing: '0.15em', fontWeight: 500 }}
            >
              Botanical AI Infrastructure
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Lufga font-medium mb-6 md:mb-8"
              style={{ color: '#224234', lineHeight: 1.1 }}
            >
              Your plants deserve a digital twin.
            </h1>

            <div className="mb-8 md:mb-12 w-full max-w-md">
              <WaitlistForm />
            </div>
          </div>

          {/* Right Column — Phone Mockup (cols 7-12 on wide screens) */}
          <div className="col-span-1 lg:col-span-6 flex justify-center lg:justify-end items-center">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section
        className="px-8 md:px-12 py-20 md:py-28 texture-noise texture-dot-grid-subtle"
        style={{ backgroundColor: '#EDEDE4' }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs uppercase tracking-widest mb-4 font-Lufga"
            style={{ color: '#495C47', fontWeight: 500 }}
          >
            The Platform
          </p>
          <h2
            className="text-4xl md:text-5xl font-Lufga mb-16"
            style={{ color: '#224234', fontWeight: 500 }}
          >
            Everything your plants need. Nothing they don't.
          </h2>
          <BentoGrid />
        </div>
      </section>

      {/* Comparison Matrix Section */}
      <section
        className="px-8 md:px-12 py-20 md:py-28 texture-crosshatch"
        style={{ backgroundColor: '#F7F5F0' }}
      >
        <div className="max-w-6xl mx-auto">
          <ComparisonMatrix />
        </div>
      </section>

      {/* Second Waitlist CTA Section */}
      <section
        className="px-8 md:px-12 py-20 md:py-28 texture-noise-dark texture-botanical-bg-dark"
        style={{ backgroundColor: '#224234' }}
        id="waitlist-section"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-Lufga mb-6"
            style={{ color: '#EDEDE4', fontWeight: 500 }}
          >
            Be first to grow smarter.
          </h2>
          <p
            className="text-lg font-Lufga mb-12"
            style={{ color: 'rgba(237, 237, 228, 0.7)', fontWeight: 400 }}
          >
            Join the waitlist. We'll notify you when your region goes live.
          </p>
          <WaitlistForm variant="dark" />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-8 md:px-12 h-20 flex items-center justify-between texture-noise-dark"
        style={{ backgroundColor: '#1A2E23' }}
      >
        <p className="font-Lufga text-sm" style={{ color: 'rgba(237, 237, 228, 0.6)' }}>
          © 2026 Aarchid
        </p>
        <Link href="https://dilpreetgrover.me" target="_blank" rel="noopener noreferrer" className="font-Lufga text-sm transition-all hover:opacity-100" style={{ color: 'rgba(237, 237, 228, 0.6)' }}>
          Dilpreet Grover
        </Link>
      </footer>
    </div>
  )
}