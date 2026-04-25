'use client'

import { useState, useEffect } from 'react'

type ScreenType = 'home' | 'scan' | 'profile' | 'health'

export function PhoneMockup() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('home')
  const [showBadges, setShowBadges] = useState({ first: false, second: false })

  const screens: ScreenType[] = ['home', 'scan', 'profile', 'health']
  const screenIndex = screens.indexOf(activeScreen)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => {
        const currentIdx = screens.indexOf(prev)
        return screens[(currentIdx + 1) % screens.length]
      })
      setShowBadges({ first: false, second: false })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (activeScreen === 'scan') {
      const timer1 = setTimeout(() => setShowBadges((p) => ({ ...p, first: true })), 1500)
      const timer2 = setTimeout(() => setShowBadges((p) => ({ ...p, second: true })), 2500)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    }
  }, [activeScreen])

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen />
      case 'scan':
        return <ScanScreen showBadges={showBadges} />
      case 'profile':
        return <ProfileScreen />
      case 'health':
        return <HealthScreen />
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Phone Frame */}
      <div
        style={{
          width: '280px',
          height: '580px',
          borderRadius: '44px',
          background: '#1A2E23',
          border: '8px solid #1A2E23',
          boxShadow:
            '0 32px 64px rgba(34, 66, 52, 0.25), 0 0 0 1px rgba(34, 66, 52, 0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Notch */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '28px',
            background: '#1A2E23',
            borderRadius: '0 0 16px 16px',
            zIndex: 10,
          }}
        />

        {/* Screen Container */}
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '36px',
            overflow: 'hidden',
            position: 'relative',
            background: '#EDEDE4',
          }}
        >
          {/* All screens stack absolutely */}
          {renderScreen()}
        </div>
      </div>

      {/* Dot Navigation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '24px',
        }}
      >
        {screens.map((screen, idx) => (
          <button
            key={screen}
            onClick={() => {
              setActiveScreen(screen)
              setShowBadges({ first: false, second: false })
            }}
            style={{
              width: idx === screenIndex ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background:
                idx === screenIndex ? '#224234' : 'rgba(34, 66, 52, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Screen 1 - Home / Dashboard
function HomeScreen() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#EDEDE4',
        display: 'flex',
        flexDirection: 'column',
        opacity: 1,
        transform: 'translateX(0)',
        transition: 'all 0.5s ease',
      }}
    >
      {/* Status Bar */}
      <div
        style={{
          height: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: '0 20px 8px',
          fontSize: '11px',
          fontWeight: 500,
          color: '#224234',
          fontFamily: 'Lufga, sans-serif',
        }}
      >
        <span>9:41</span>
        <div style={{ display: 'flex', gap: '2px' }}>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <rect x="0" y="6" width="2" height="4" fill="#224234" />
            <rect x="4" y="3" width="2" height="7" fill="#224234" />
            <rect x="8" y="0" width="2" height="10" fill="#224234" />
          </svg>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M2 8 Q7 3 12 8" stroke="#224234" strokeWidth="1.5" fill="none" />
          </svg>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <rect x="0" y="0" width="12" height="8" rx="1" fill="none" stroke="#224234" strokeWidth="1" />
            <rect x="11" y="2" width="2" height="4" fill="#224234" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* Greeting */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px 12px',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '12px',
                color: '#495C47',
                margin: 0,
                fontFamily: 'Lufga, sans-serif',
              }}
            >
              Good morning,
            </p>
            <p
              style={{
                fontSize: '20px',
                fontWeight: 500,
                color: '#224234',
                margin: '4px 0 0 0',
                fontFamily: 'Lufga, sans-serif',
              }}
            >
              Plant Parent
            </p>
          </div>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#224234',
            }}
          />
        </div>

        {/* Search Bar */}
        <div
          style={{
            margin: '0 20px 12px',
            height: '40px',
            background: '#F7F5F0',
            borderRadius: '20px',
            border: '1px solid rgba(73, 92, 71, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingLeft: '12px',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="5" cy="5" r="4" stroke="#495C47" strokeWidth="1.5" fill="none" />
            <line x1="8" y1="8" x2="13" y2="13" stroke="#495C47" strokeWidth="1.5" />
          </svg>
          <span
            style={{
              fontSize: '13px',
              color: '#495C47',
              opacity: 0.5,
              fontFamily: 'Lufga, sans-serif',
            }}
          >
            Search plants...
          </span>
        </div>

        {/* My Plants Section */}
        <p
          style={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#224234',
            padding: '16px 20px 8px',
            margin: 0,
            fontFamily: 'Lufga, sans-serif',
          }}
        >
          My Plants
        </p>

        {/* Plant Cards */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            padding: '0 20px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {[
            { name: 'Monstera', health: 'green' },
            { name: 'Pothos', health: 'green' },
            { name: 'Ficus', health: 'amber' },
            { name: 'Ivy', health: 'green' },
          ].map((plant) => (
            <div
              key={plant.name}
              style={{
                flex: '0 0 72px',
                background: '#F7F5F0',
                borderRadius: '16px',
                padding: '12px 8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                {plant.name === 'Monstera' && (
                  <path
                    d="M16 4 Q20 8 20 14 L20 26 Q16 28 16 28 Q12 28 12 26 L12 14 Q12 8 16 4"
                    fill="#224234"
                    opacity="0.7"
                  />
                )}
                {plant.name === 'Pothos' && (
                  <path
                    d="M10 10 Q14 6 18 10 Q20 14 18 18 Q14 22 10 18 Q8 14 10 10"
                    fill="#495C47"
                  />
                )}
                {plant.name === 'Ficus' && (
                  <path
                    d="M16 6 L12 14 L14 20 L16 24 L18 20 L20 14 Z"
                    fill="#224234"
                  />
                )}
                {plant.name === 'Ivy' && (
                  <path
                    d="M14 8 L12 14 L13 18 L14 22 L16 20 L17 14 L16 8 Z M16 8 L18 14 L19 18 L20 22"
                    stroke="#495C47"
                    fill="none"
                    strokeWidth="1.5"
                  />
                )}
              </svg>
              <p
                style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  color: '#224234',
                  textAlign: 'center',
                  margin: 0,
                  fontFamily: 'Lufga, sans-serif',
                }}
              >
                {plant.name}
              </p>
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor:
                    plant.health === 'green' ? '#4CAF50' : '#FFC107',
                }}
              />
            </div>
          ))}
        </div>

        {/* Today's Tasks */}
        <p
          style={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#224234',
            padding: '16px 20px 8px',
            margin: 0,
            fontFamily: 'Lufga, sans-serif',
          }}
        >
          Today&apos;s Tasks
        </p>

        {/* Task Rows */}
        <div style={{ padding: '0 20px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { icon: 'water', task: 'Water Monstera', plant: 'Monstera', badge: 'Due today' },
            { icon: 'fertilizer', task: 'Fertilize Pothos', plant: 'Pothos', badge: 'Due today' },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: item.icon === 'water' ? 'rgba(34, 66, 52, 0.1)' : 'rgba(73, 92, 71, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon === 'water' ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1 Q6 4 6 7 Q6 10 8 12 Q10 10 10 7 Q10 4 8 1"
                      fill="#224234"
                    />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="3" y="4" width="10" height="8" rx="1" fill="none" stroke="#495C47" strokeWidth="1" />
                    <line x1="5" y1="4" x2="5" y2="2" stroke="#495C47" strokeWidth="1" />
                    <line x1="11" y1="4" x2="11" y2="2" stroke="#495C47" strokeWidth="1" />
                  </svg>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#224234',
                    margin: 0,
                    fontFamily: 'Lufga, sans-serif',
                  }}
                >
                  {item.task}
                </p>
                <p
                  style={{
                    fontSize: '11px',
                    color: '#495C47',
                    margin: '2px 0 0 0',
                    fontFamily: 'Lufga, sans-serif',
                  }}
                >
                  {item.plant}
                </p>
              </div>
              <div
                style={{
                  padding: '2px 8px',
                  borderRadius: '12px',
                  background: 'rgba(34, 66, 52, 0.1)',
                  color: '#224234',
                  fontSize: '10px',
                  fontFamily: 'Lufga, sans-serif',
                }}
              >
                {item.badge}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div
        style={{
          height: '64px',
          background: '#F7F5F0',
          borderTop: '1px solid rgba(73, 92, 71, 0.1)',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingBottom: '8px',
        }}
      >
        {['home', 'scan', 'garden', 'profile'].map((icon, idx) => (
          <div key={icon} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill={idx === 0 ? '#224234' : '#495C47'} opacity={idx === 0 ? 1 : 0.5}>
              {icon === 'home' && <path d="M3 10 L10 3 L17 10 V17 H13 V13 H7 V17 H3 Z" />}
              {icon === 'scan' && <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />}
              {icon === 'garden' && <path d="M5 15 Q5 10 10 8 Q15 10 15 15 M8 15 V12 M12 15 V11" fill="none" stroke="currentColor" strokeWidth="1.5" />}
              {icon === 'profile' && <circle cx="10" cy="6" r="3" /> }
            </svg>
            {idx === 0 && (
              <div
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#224234',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Screen 2 - Scan / Identification
function ScanScreen({ showBadges }: { showBadges: { first: boolean; second: boolean } }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#1A2E23',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        opacity: 1,
        transform: 'translateX(0)',
        transition: 'all 0.5s ease',
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          height: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 16px',
          color: '#EDEDE4',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="#EDEDE4" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <p
          style={{
            fontSize: '15px',
            fontWeight: 500,
            color: '#EDEDE4',
            margin: 0,
            fontFamily: 'Lufga, sans-serif',
          }}
        >
          Identify Plant
        </p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="1" fill="#EDEDE4" />
          <circle cx="12" cy="5" r="1" fill="#EDEDE4" />
          <circle cx="12" cy="19" r="1" fill="#EDEDE4" />
        </svg>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '20px' }}>
        {/* Camera Viewfinder */}
        <div
          style={{
            width: 'calc(100% - 32px)',
            aspectRatio: '1',
            background: 'rgba(237, 237, 228, 0.08)',
            border: '2px solid rgba(237, 237, 228, 0.3)',
            borderRadius: '24px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Corner Brackets */}
          {[
          { top: 0, left: 0, rotation: 0 },
          { top: 0, right: 0, rotation: 90 },
          { bottom: 0, left: 0, rotation: 270 },
          { bottom: 0, right: 0, rotation: 180 },
        ].map((pos, idx) => {
          const { rotation, ...posStyle } = pos
          return (
            <svg
              key={idx}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{
                position: 'absolute',
                transform: `rotate(${rotation}deg)`,
                ...posStyle,
              } as React.CSSProperties}
            >
              <path d="M0 0 L8 0 L8 2 L2 2 L2 8 L0 8 Z" stroke="#EDEDE4" strokeWidth="1.5" fill="none" />
            </svg>
          )
        })}
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path
              d="M30 10 Q35 15 35 25 Q35 35 30 45 Q25 35 25 25 Q25 15 30 10"
              fill="rgba(237, 237, 228, 0.4)"
            />
            <path
              d="M20 25 Q24 28 30 28 Q36 28 40 25"
              stroke="rgba(237, 237, 228, 0.3)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        {/* Instruction Text */}
        <p
          style={{
            fontSize: '13px',
            color: '#EDEDE4',
            opacity: 0.6,
            textAlign: 'center',
            margin: 0,
            fontFamily: 'Lufga, sans-serif',
          }}
        >
          Hold steady for best results
        </p>

        {/* Capture Button */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#EDEDE4',
            border: '3px solid rgba(237, 237, 228, 0.3)',
            boxShadow: 'inset 0 0 0 4px rgba(237, 237, 228, 0.15)',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />

        {/* Upload Text */}
        <p
          style={{
            fontSize: '11px',
            color: '#EDEDE4',
            opacity: 0.4,
            margin: 0,
            fontFamily: 'Lufga, sans-serif',
          }}
        >
          or upload from gallery
        </p>
      </div>

      {/* Floating Badges */}
      {showBadges.first && (
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '-60px',
            background: '#EDEDE4',
            borderRadius: '12px',
            padding: '10px 14px',
            boxShadow: '0 8px 24px rgba(34, 66, 52, 0.15)',
            borderLeft: '3px solid #224234',
            animation: 'slideInBadge 0.5s ease forwards',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 500,
              color: '#224234',
              margin: 0,
              fontFamily: 'Lufga, sans-serif',
            }}
          >
            Identified in 0.8s
          </p>
          <p
            style={{
              fontSize: '10px',
              color: '#495C47',
              margin: '2px 0 0 0',
              fontFamily: 'Lufga, sans-serif',
            }}
          >
            Monstera deliciosa — 99.1%
          </p>
        </div>
      )}

      {showBadges.second && (
        <div
          style={{
            position: 'absolute',
            bottom: '25%',
            left: '-70px',
            background: '#EDEDE4',
            borderRadius: '12px',
            padding: '10px 14px',
            boxShadow: '0 8px 24px rgba(34, 66, 52, 0.15)',
            borderLeft: '3px solid #224234',
            animation: 'slideInBadge 0.5s ease forwards',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 500,
              color: '#224234',
              margin: 0,
              fontFamily: 'Lufga, sans-serif',
            }}
          >
            Health Score
          </p>
          <p
            style={{
              fontSize: '10px',
              color: '#495C47',
              margin: '2px 0 0 0',
              fontFamily: 'Lufga, sans-serif',
            }}
          >
            94/100 — Excellent
          </p>
        </div>
      )}
    </div>
  )
}

// Screen 3 - Plant Profile / Digital Twin
function ProfileScreen() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#F7F5F0',
        display: 'flex',
        flexDirection: 'column',
        opacity: 1,
        transform: 'translateX(0)',
        transition: 'all 0.5s ease',
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          height: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 16px',
          color: '#224234',
          borderBottom: '1px solid rgba(73, 92, 71, 0.1)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="#224234" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <p
          style={{
            fontSize: '15px',
            fontWeight: 500,
            color: '#224234',
            margin: 0,
            fontFamily: 'Lufga, sans-serif',
          }}
        >
          Monstera
        </p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 12 L20 12 M20 12 L16 8 M20 12 L16 16" stroke="#224234" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Hero Section */}
      <div
        style={{
          height: '180px',
          backgroundColor: '#224234',
          borderRadius: '0 0 24px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Monstera Leaf */}
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path
            d="M40 10 Q50 20 50 35 Q50 45 45 55 L40 70 L35 55 Q30 45 30 35 Q30 20 40 10"
            fill="rgba(237, 237, 228, 0.9)"
          />
          <path d="M35 30 L38 33 M45 30 L42 33 M40 45 L40 50" stroke="#224234" strokeWidth="1.5" fill="none" />
        </svg>

        {/* Plant Name Pill */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            background: 'rgba(0, 0, 0, 0.3)',
            color: '#EDEDE4',
            padding: '4px 10px',
            borderRadius: '10px',
            fontSize: '10px',
            fontFamily: 'Lufga, sans-serif',
          }}
        >
          Monstera deliciosa
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'flex', gap: '8px', padding: '12px 16px' }}>
        {[
          { icon: '♥', value: '87', label: 'Health' },
          { icon: '📅', value: '14', label: 'Days' },
          { icon: '✓', value: 'Good', label: 'Care' },
        ].map((stat, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              background: '#EDEDE4',
              borderRadius: '12px',
              padding: '10px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span style={{ fontSize: '16px' }}>{stat.icon}</span>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: '#224234',
                margin: 0,
                fontFamily: 'Lufga, sans-serif',
              }}
            >
              {stat.value}
            </p>
            <p
              style={{
                fontSize: '10px',
                color: '#495C47',
                margin: 0,
                fontFamily: 'Lufga, sans-serif',
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Care Schedule */}
      <p
        style={{
          fontSize: '13px',
          fontWeight: 500,
          color: '#224234',
          padding: '12px 16px 8px',
          margin: 0,
          fontFamily: 'Lufga, sans-serif',
        }}
      >
        Care Schedule
      </p>

      {/* Schedule Rows */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[
          { due: true, task: 'Water', date: 'Today' },
          { due: false, task: 'Fertilize', date: 'In 3 days' },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: item.due ? '#224234' : 'rgba(73, 92, 71, 0.3)',
              }}
            />
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#224234',
                  margin: 0,
                  fontFamily: 'Lufga, sans-serif',
                }}
              >
                {item.task}
              </p>
              <p
                style={{
                  fontSize: '10px',
                  color: '#495C47',
                  margin: '2px 0 0 0',
                  fontFamily: 'Lufga, sans-serif',
                }}
              >
                {item.date}
              </p>
            </div>
            <span style={{ fontSize: '14px' }}>
              {item.due ? '✓' : '🕐'}
            </span>
          </div>
        ))}
      </div>

      {/* Health Score Card */}
      <div
        style={{
          background: '#224234',
          borderRadius: '16px',
          margin: '12px 16px 0',
          padding: '14px',
          color: '#EDEDE4',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '11px',
              opacity: 0.7,
              margin: 0,
              fontFamily: 'Lufga, sans-serif',
            }}
          >
            Health Score
          </p>
          <p
            style={{
              fontSize: '20px',
              fontWeight: 500,
              margin: '4px 0 0',
              fontFamily: 'Lufga, sans-serif',
            }}
          >
            87/100
          </p>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={2 + i * 4}
              y={20 - (i + 1) * 3}
              width="3"
              height={(i + 1) * 3}
              fill="rgba(237, 237, 228, 0.7)"
            />
          ))}
          <rect x={18} y={5} width="3" height="15" fill="#EDEDE4" />
        </svg>
      </div>
    </div>
  )
}

// Screen 4 - Health Diagnostic Result
function HealthScreen() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#EDEDE4',
        display: 'flex',
        flexDirection: 'column',
        opacity: 1,
        transform: 'translateX(0)',
        transition: 'all 0.5s ease',
        overflowY: 'auto',
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          height: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 16px',
          color: '#224234',
          borderBottom: '1px solid rgba(73, 92, 71, 0.1)',
          backgroundColor: '#EDEDE4',
          position: 'sticky',
          top: 0,
          zIndex: 5,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="#224234" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <p
          style={{
            fontSize: '15px',
            fontWeight: 500,
            color: '#224234',
            margin: 0,
            fontFamily: 'Lufga, sans-serif',
          }}
        >
          Health Analysis
        </p>
        <div style={{ width: '24px' }} />
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '16px' }}>
        {/* Status Card */}
        <div
          style={{
            background: '#224234',
            borderRadius: '20px',
            padding: '16px',
            color: '#EDEDE4',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4CAF50' }} />
            <p
              style={{
                fontSize: '13px',
                fontWeight: 500,
                margin: 0,
                fontFamily: 'Lufga, sans-serif',
              }}
            >
              Plant is Healthy
            </p>
          </div>
          <p
            style={{
              fontSize: '10px',
              opacity: 0.5,
              margin: 0,
              fontFamily: 'Lufga, sans-serif',
            }}
          >
            Last scanned: Just now
          </p>
          <p
            style={{
              fontSize: '36px',
              fontWeight: 300,
              margin: '8px 0 0',
              textAlign: 'center',
              fontFamily: 'Lufga, sans-serif',
            }}
          >
            94%
          </p>
          <p
            style={{
              fontSize: '10px',
              opacity: 0.6,
              margin: '4px 0 0',
              textAlign: 'center',
              fontFamily: 'Lufga, sans-serif',
            }}
          >
            Overall Score
          </p>
        </div>

        {/* Diagnostic Rows */}
        {[
          { status: 'passed', category: 'Pest Detection', detail: 'No issues found', percent: '100%' },
          { status: 'warning', category: 'Nutrient Levels', detail: 'Slightly low nitrogen', percent: '78%' },
          { status: 'passed', category: 'Disease Check', detail: 'No signs detected', percent: '100%' },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              background: '#F7F5F0',
              borderRadius: '12px',
              padding: '12px 14px',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: item.status === 'passed' ? '#4CAF50' : '#FFC107',
              }}
            />
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#224234',
                  margin: 0,
                  fontFamily: 'Lufga, sans-serif',
                }}
              >
                {item.category}
              </p>
              <p
                style={{
                  fontSize: '10px',
                  color: '#495C47',
                  margin: '2px 0 0',
                  fontFamily: 'Lufga, sans-serif',
                }}
              >
                {item.detail}
              </p>
            </div>
            <div
              style={{
                background: 'rgba(34, 66, 52, 0.1)',
                color: '#224234',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '10px',
                fontFamily: 'Lufga, sans-serif',
              }}
            >
              {item.percent}
            </div>
          </div>
        ))}

        {/* Recommendation Card */}
        <div
          style={{
            background: '#F7F5F0',
            borderRadius: '16px',
            padding: '14px',
            marginTop: '12px',
          }}
        >
          <p
            style={{
              fontSize: '10px',
              color: '#495C47',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              margin: 0,
              fontFamily: 'Lufga, sans-serif',
              fontWeight: 500,
            }}
          >
            AI Recommendation
          </p>
          <p
            style={{
              fontSize: '12px',
              color: '#224234',
              lineHeight: 1.6,
              margin: '8px 0 0',
              fontFamily: 'Lufga, sans-serif',
            }}
          >
            Consider a nitrogen-rich fertilizer in the next watering cycle. Current light levels are optimal.
          </p>
        </div>
      </div>
    </div>
  )
}
