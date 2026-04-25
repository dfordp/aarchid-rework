'use client'

export function BentoGrid() {
  return (
    <div className="w-full">
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: 'minmax(200px, auto)',
        }}
      >
        {/* Card 1 - The Digital Twin - LARGE */}
        <div
          className="bento-card rounded-3xl p-8 md:p-12 overflow-hidden texture-noise-dark"
          style={{
            gridColumn: '1 / 8',
            gridRow: 'span 2',
            backgroundColor: '#224234',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3
              className="text-3xl md:text-4xl font-Lufga mb-6"
              style={{ color: '#EDEDE4', fontWeight: 500, lineHeight: 1.2 }}
            >
              Digital Twin Profile
            </h3>
            <p
              className="text-base font-Lufga mb-6"
              style={{ color: 'rgba(237, 237, 228, 0.8)' }}
            >
              Each plant gets its own identity. Tracked daily, analyzed weekly, cared for automatically.
            </p>
          </div>

          {/* Illustration */}
          <svg
            style={{
              position: 'absolute',
              top: '50%',
              right: '40px',
              transform: 'translateY(-50%)',
              width: '200px',
              height: '200px',
              opacity: 0.12,
              pointerEvents: 'none',
              zIndex: 0,
            }}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="80" stroke="#EDEDE4" strokeWidth="2"/>
            <path d="M100 40 Q130 70 130 100 Q130 130 100 160 Q70 130 70 100 Q70 70 100 40Z" fill="#EDEDE4" opacity="0.3"/>
            <circle cx="100" cy="90" r="15" fill="#EDEDE4"/>
            <path d="M85 110 L100 125 L115 110" fill="#EDEDE4" opacity="0.6"/>
            <g opacity="0.4">
              <circle cx="60" cy="100" r="6" fill="#EDEDE4"/>
              <circle cx="140" cy="100" r="6" fill="#EDEDE4"/>
              <circle cx="100" cy="50" r="6" fill="#EDEDE4"/>
              <circle cx="100" cy="150" r="6" fill="#EDEDE4"/>
            </g>
          </svg>

          <div className="flex flex-wrap gap-3" style={{ position: 'relative', zIndex: 1 }}>
            <span
              className="px-4 py-2 rounded-lg text-sm font-Lufga font-medium"
              style={{
                backgroundColor: 'rgba(237, 237, 228, 0.15)',
                color: '#EDEDE4',
              }}
            >
              $1/month
            </span>
            <span
              className="px-4 py-2 rounded-lg text-sm font-Lufga font-medium"
              style={{
                backgroundColor: 'rgba(237, 237, 228, 0.15)',
                color: '#EDEDE4',
              }}
            >
              Lifetime tracking
            </span>
          </div>
        </div>

        {/* Card 2 - Instant ID - MEDIUM */}
        <div
          className="bento-card rounded-3xl p-8 overflow-hidden texture-crosshatch"
          style={{
            gridColumn: '8 / 13',
            gridRow: 'span 1',
            backgroundColor: '#F7F5F0',
            border: '1px solid #495C47',
            boxShadow: 'inset 0 0 0 1px rgba(73, 92, 71, 0.08)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {/* Illustration */}
          <svg
            style={{
              width: '140px',
              height: '140px',
              minWidth: '140px',
              opacity: 0.13,
              pointerEvents: 'none',
            }}
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <circle id="scan" cx="70" cy="70" r="55"/>
            </defs>
            <circle cx="70" cy="70" r="60" stroke="#224234" strokeWidth="2"/>
            <circle cx="70" cy="70" r="50" stroke="#224234" strokeWidth="1" opacity="0.4"/>
            <rect x="30" y="35" width="80" height="70" rx="6" fill="#224234" opacity="0.08"/>
            <circle cx="70" cy="55" r="18" fill="#224234" opacity="0.15"/>
            <path d="M55 75 Q70 85 85 75" stroke="#224234" strokeWidth="2" opacity="0.3" fill="none"/>
            <g opacity="0.5">
              <circle cx="40" cy="40" r="2" fill="#224234"/>
              <circle cx="100" cy="40" r="2" fill="#224234"/>
              <circle cx="40" cy="100" r="2" fill="#224234"/>
              <circle cx="100" cy="100" r="2" fill="#224234"/>
            </g>
            <g opacity="0.3" strokeWidth="0.8" stroke="#224234" fill="none">
              <path d="M50 20 L50 30"/>
              <path d="M90 20 L90 30"/>
              <path d="M20 50 L30 50"/>
              <path d="M20 90 L30 90"/>
              <path d="M110 50 L120 50"/>
              <path d="M110 90 L120 90"/>
            </g>
          </svg>

          <div>
            <h3 className="text-xl font-Lufga mb-3" style={{ color: '#224234', fontWeight: 500 }}>Never guess again</h3>
            <p className="text-sm font-Lufga mb-4" style={{ color: '#495C47', lineHeight: 1.6 }}>Snap a photo of any plant. Get instant species ID with care instructions tailored to your climate.</p>
          </div>
        </div>

        {/* Card 3 - Health Diagnostic - SMALL */}
        <div
          className="bento-card rounded-3xl p-8 overflow-hidden texture-noise-dark"
          style={{
            gridColumn: '8 / 13',
            gridRow: 'span 1',
            backgroundColor: '#495C47',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {/* Illustration */}
          <svg
            style={{
              width: '130px',
              height: '130px',
              minWidth: '130px',
              opacity: 0.18,
              pointerEvents: 'none',
            }}
            viewBox="0 0 130 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="65" cy="65" r="55" stroke="#EDEDE4" strokeWidth="2.5"/>
            <circle cx="65" cy="65" r="45" stroke="#EDEDE4" strokeWidth="1" opacity="0.3"/>
            <circle cx="65" cy="65" r="35" stroke="#EDEDE4" strokeWidth="1" opacity="0.2"/>
            <path d="M65 20 L65 110" stroke="#EDEDE4" strokeWidth="2" opacity="0.4"/>
            <path d="M20 65 L110 65" stroke="#EDEDE4" strokeWidth="2" opacity="0.4"/>
            <circle cx="65" cy="65" r="10" fill="#EDEDE4" opacity="0.5"/>
            <g opacity="0.6" fill="#EDEDE4">
              <circle cx="65" cy="25" r="5"/>
              <circle cx="100" cy="65" r="5"/>
              <circle cx="65" cy="105" r="5"/>
              <circle cx="30" cy="65" r="5"/>
            </g>
            <g opacity="0.3" stroke="#EDEDE4" strokeWidth="0.8" fill="none">
              <path d="M55 45 L75 85"/>
              <path d="M75 45 L55 85"/>
              <path d="M45 55 L85 75"/>
              <path d="M85 55 L45 75"/>
            </g>
          </svg>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 className="text-lg font-Lufga mb-3" style={{ color: '#EDEDE4', fontWeight: 500 }}>Catch problems early</h3>
            <p className="text-sm font-Lufga mb-4" style={{ color: 'rgba(237, 237, 228, 0.85)', lineHeight: 1.6 }}>AI spots pests, diseases & nutrient deficiencies before they kill your plant. Get weekly health scores & treatment plans.</p>
          </div>
        </div>

        {/* Card 4 - The $1 Model - MEDIUM */}
        <div
          className="bento-card rounded-3xl p-8 flex flex-col justify-between overflow-hidden texture-dot-grid"
          style={{
            gridColumn: '1 / 5',
            gridRow: 'span 2',
            backgroundColor: '#EDEDE4',
            border: '1px solid #224234',
            position: 'relative',
          }}
        >
          {/* Large $ Illustration */}
          <svg
            style={{
              position: 'absolute',
              top: '50%',
              right: '-30px',
              transform: 'translateY(-50%)',
              width: '200px',
              height: '200px',
              opacity: 0.08,
              pointerEvents: 'none',
            }}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50"
              y="70"
              fontSize="80"
              fontWeight="bold"
              textAnchor="middle"
              fill="#224234"
            >
              $
            </text>
          </svg>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p
              className="text-6xl font-Lufga mb-2"
              style={{ color: '#224234', fontWeight: 700 }}
            >
              $1
            </p>
            <p
              className="text-base font-Lufga"
              style={{ color: '#495C47', fontWeight: 500 }}
            >
              per plant/month
            </p>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p
              className="text-sm font-Lufga"
              style={{ color: '#224234', lineHeight: 1.6 }}
            >
              <span style={{ color: '#495C47', textDecoration: 'line-through' }}>$80/yr</span> $12/yr
            </p>
          </div>
        </div>

        {/* Card 5 - Care Automation - SMALL */}
        <div
          className="bento-card rounded-3xl p-8 overflow-hidden texture-crosshatch"
          style={{
            gridColumn: '5 / 13',
            gridRow: 'span 1',
            backgroundColor: '#F7F5F0',
            border: '1px solid #495C47',
            boxShadow: 'inset 0 0 0 1px rgba(73, 92, 71, 0.06)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
          }}
        >
          {/* Illustration */}
          <svg
            style={{
              width: '100px',
              height: '100px',
              opacity: 0.13,
              pointerEvents: 'none',
            }}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="45" stroke="#224234" strokeWidth="2.5"/>
            <circle cx="60" cy="60" r="35" stroke="#224234" strokeWidth="1" opacity="0.3"/>
            <line x1="60" y1="60" x2="60" y2="25" stroke="#224234" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="60" y1="60" x2="80" y2="60" stroke="#224234" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="60" cy="60" r="8" fill="#224234"/>
            <g opacity="0.5" fill="#224234">
              <circle cx="60" cy="20" r="4"/>
              <circle cx="85" cy="60" r="4"/>
              <circle cx="60" cy="100" r="4"/>
              <circle cx="35" cy="60" r="4"/>
            </g>
            <g opacity="0.3" stroke="#224234" strokeWidth="0.8" fill="none">
              <path d="M70 35 Q75 40 72 48"/>
              <path d="M45 70 Q42 75 50 78"/>
              <path d="M70 85 Q75 80 78 72"/>
              <path d="M40 50 Q35 45 38 38"/>
            </g>
          </svg>

          <div>
            <h3 className="text-lg font-Lufga mb-2" style={{ color: '#224234', fontWeight: 500 }}>Never miss a watering</h3>
            <p className="text-sm font-Lufga" style={{ color: '#495C47', lineHeight: 1.5 }}>Smart reminders adjust for rain, humidity & season. One less thing to worry about.</p>
          </div>
        </div>

        {/* Card 6 - Growth Journal - SMALL */}
        <div
          className="bento-card rounded-3xl p-8 overflow-hidden texture-crosshatch"
          style={{
            gridColumn: '5 / 13',
            gridRow: 'span 1',
            backgroundColor: '#F7F5F0',
            border: '1px solid #495C47',
            boxShadow: 'inset 0 0 0 1px rgba(73, 92, 71, 0.06)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
          }}
        >
          {/* Illustration */}
          <svg
            style={{
              width: '100px',
              height: '100px',
              opacity: 0.13,
              pointerEvents: 'none',
            }}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="15" y="20" width="90" height="80" rx="6" stroke="#224234" strokeWidth="2" fill="none"/>
            <line x1="20" y1="40" x2="105" y2="40" stroke="#224234" strokeWidth="1" opacity="0.4"/>
            <line x1="20" y1="60" x2="105" y2="60" stroke="#224234" strokeWidth="1" opacity="0.4"/>
            <line x1="20" y1="80" x2="105" y2="80" stroke="#224234" strokeWidth="1" opacity="0.4"/>
            <g opacity="0.6" strokeWidth="1.5" stroke="#224234" fill="none">
              <polyline points="30,70 40,65 50,55 60,60 70,45 85,50"/>
            </g>
            <g opacity="0.5" fill="#224234">
              <circle cx="30" cy="70" r="2.5"/>
              <circle cx="40" cy="65" r="2.5"/>
              <circle cx="50" cy="55" r="2.5"/>
              <circle cx="60" cy="60" r="2.5"/>
              <circle cx="70" cy="45" r="2.5"/>
              <circle cx="85" cy="50" r="2.5"/>
            </g>
            <g opacity="0.2" stroke="#224234" strokeWidth="0.8" fill="none">
              <path d="M25 40 L30 32"/>
              <path d="M100 40 L105 35"/>
            </g>
          </svg>

          <div>
            <h3 className="text-lg font-Lufga mb-2" style={{ color: '#224234', fontWeight: 500 }}>See the progress</h3>
            <p className="text-sm font-Lufga" style={{ color: '#495C47', lineHeight: 1.5 }}>Auto-timestamped photos show exactly how your plant has grown month to month. Track what's working.</p>
          </div>
        </div>

        {/* Card 7 - Edge Architecture - SMALL */}
        <div
          className="bento-card rounded-3xl p-8 overflow-hidden texture-noise-dark"
          style={{
            gridColumn: '1 / 6',
            gridRow: 'span 1',
            backgroundColor: '#224234',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {/* Illustration */}
          <svg
            style={{
              width: '130px',
              height: '130px',
              minWidth: '130px',
              opacity: 0.14,
              pointerEvents: 'none',
            }}
            viewBox="0 0 130 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="65" cy="35" r="14" stroke="#EDEDE4" strokeWidth="2.5"/>
            <circle cx="30" cy="85" r="12" stroke="#EDEDE4" strokeWidth="2.5"/>
            <circle cx="100" cy="85" r="12" stroke="#EDEDE4" strokeWidth="2.5"/>
            <circle cx="65" cy="115" r="10" stroke="#EDEDE4" strokeWidth="2"/>
            <line x1="65" y1="49" x2="30" y2="73" stroke="#EDEDE4" strokeWidth="2" opacity="0.6"/>
            <line x1="65" y1="49" x2="100" y2="73" stroke="#EDEDE4" strokeWidth="2" opacity="0.6"/>
            <line x1="30" y1="97" x2="65" y2="105" stroke="#EDEDE4" strokeWidth="1.5" opacity="0.5"/>
            <line x1="100" y1="97" x2="65" y2="105" stroke="#EDEDE4" strokeWidth="1.5" opacity="0.5"/>
            <g opacity="0.5" fill="#EDEDE4">
              <circle cx="65" cy="35" r="5"/>
              <circle cx="30" cy="85" r="4"/>
              <circle cx="100" cy="85" r="4"/>
              <circle cx="65" cy="115" r="3"/>
            </g>
            <g opacity="0.3" stroke="#EDEDE4" strokeWidth="0.8" fill="none">
              <path d="M20 85 L15 80"/>
              <path d="M110 85 L115 80"/>
              <path d="M65 15 L65 8"/>
              <path d="M65 125 L65 132"/>
            </g>
          </svg>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 className="text-lg font-Lufga mb-2" style={{ color: '#EDEDE4', fontWeight: 500 }}>Lightning fast</h3>
            <p className="text-sm font-Lufga mb-3" style={{ color: 'rgba(237, 237, 228, 0.85)', lineHeight: 1.5 }}>Instant AI analysis no matter where you are. Built for reliability, not waiting.</p>
          </div>
        </div>

        {/* Card 8 - The B2B Play - LARGE */}
        <div
          className="bento-card rounded-3xl p-8 md:p-12 overflow-hidden texture-noise"
          style={{
            gridColumn: '6 / 13',
            gridRow: 'span 1',
            backgroundColor: '#8B7355',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {/* Illustration */}
          <svg
            style={{
              width: '180px',
              height: '180px',
              minWidth: '180px',
              opacity: 0.14,
              pointerEvents: 'none',
            }}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="1.8" stroke="#EDEDE4">
              <rect x="12" y="12" width="28" height="40" rx="2" fill="none"/>
              <rect x="52" y="12" width="28" height="40" rx="2" fill="none"/>
              <rect x="12" y="65" width="28" height="38" rx="2" fill="none"/>
              <rect x="52" y="65" width="28" height="38" rx="2" fill="none"/>
            </g>
            <g opacity="0.5" strokeWidth="0.8" stroke="#EDEDE4">
              <line x1="26" y1="20" x2="26" y2="52"/>
              <line x1="66" y1="20" x2="66" y2="52"/>
              <line x1="26" y1="75" x2="26" y2="103"/>
              <line x1="66" y1="75" x2="66" y2="103"/>
            </g>
            <g opacity="0.6" fill="#EDEDE4">
              <circle cx="26" cy="25" r="2.5"/>
              <circle cx="26" cy="45" r="2.5"/>
              <circle cx="66" cy="25" r="2.5"/>
              <circle cx="66" cy="45" r="2.5"/>
              <circle cx="26" cy="80" r="2"/>
              <circle cx="26" cy="95" r="2"/>
              <circle cx="66" cy="80" r="2"/>
              <circle cx="66" cy="95" r="2"/>
            </g>
            <g opacity="0.3" strokeWidth="1" stroke="#EDEDE4" fill="none">
              <line x1="20" y1="15" x2="15" y2="10"/>
              <line x1="80" y1="15" x2="85" y2="10"/>
              <line x1="20" y1="100" x2="15" y2="105"/>
              <line x1="80" y1="100" x2="85" y2="105"/>
            </g>
          </svg>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 className="text-2xl md:text-3xl font-Lufga mb-3" style={{ color: '#EDEDE4', fontWeight: 500, lineHeight: 1.3 }}>Your data. Worth something.</h3>
            <p className="text-base font-Lufga mb-6" style={{ color: 'rgba(237, 237, 228, 0.85)', lineHeight: 1.6 }}>Researchers, nurseries & growers license your anonymized plant data. You get paid. They get insights. Everyone wins.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          
          div[style*="grid-column"] {
            grid-column: 1 / -1 !important;
          }
          
          div[style*="grid-row"] {
            grid-row: auto !important;
          }

          .bento-reveal {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        }
      `}</style>
    </div>
  )
}
