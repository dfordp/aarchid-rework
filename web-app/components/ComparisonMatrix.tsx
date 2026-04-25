'use client'

interface ComparisonData {
  feature: string
  aarchid: string | number
  plantParent: string | number
  blossom: string | number
  greg: string | number
  rhsGrow: string | number
}

const data: ComparisonData[] = [
  {
    feature: 'Annual Price',
    aarchid: '$12',
    plantParent: '$29.99',
    blossom: '$79.99',
    greg: '$29.99',
    rhsGrow: '~$51',
  },
  {
    feature: 'Price Model',
    aarchid: 'Per plant',
    plantParent: 'Flat',
    blossom: 'Flat',
    greg: 'Flat',
    rhsGrow: 'Flat',
  },
  {
    feature: 'Plant ID Accuracy',
    aarchid: '99%+',
    plantParent: 'High',
    blossom: 'High',
    greg: 'Medium',
    rhsGrow: 'High',
  },
  {
    feature: 'Health Diagnosis',
    aarchid: 'AI + Research',
    plantParent: 'AI',
    blossom: 'AI',
    greg: 'Community',
    rhsGrow: 'Expert',
  },
  {
    feature: 'Care Reminders',
    aarchid: 'Yes',
    plantParent: 'Yes',
    blossom: 'Yes',
    greg: 'Yes',
    rhsGrow: 'Yes',
  },
  {
    feature: 'Offline Mode',
    aarchid: 'Yes',
    plantParent: 'No',
    blossom: 'No',
    greg: 'No',
    rhsGrow: 'No',
  },
  {
    feature: 'B2B API',
    aarchid: 'Yes',
    plantParent: 'No',
    blossom: 'No',
    greg: 'No',
    rhsGrow: 'No',
  },
  {
    feature: 'Data Ownership',
    aarchid: 'Yes',
    plantParent: 'No',
    blossom: 'No',
    greg: 'No',
    rhsGrow: 'No',
  },
  {
    feature: 'Languages',
    aarchid: '30+',
    plantParent: '13',
    blossom: '5',
    greg: '1',
    rhsGrow: '1',
  },
  {
    feature: 'Edge Architecture',
    aarchid: 'Yes',
    plantParent: 'No',
    blossom: 'No',
    greg: 'No',
    rhsGrow: 'No',
  },
  {
    feature: 'Geographic Coverage',
    aarchid: '195+ Countries',
    plantParent: '3-5 Countries',
    blossom: '3-5 Countries',
    greg: '1 Country',
    rhsGrow: '1 Country',
  },
  {
    feature: 'Global Dataset',
    aarchid: 'Yes (Unified)',
    plantParent: 'Regional Silos',
    blossom: 'Regional Silos',
    greg: 'Fragmented',
    rhsGrow: 'Fragmented',
  },
  {
    feature: 'Weekly Subscription Trap',
    aarchid: 'No',
    plantParent: 'Yes ($3.99)',
    blossom: 'Yes ($7.99)',
    greg: 'No',
    rhsGrow: 'No',
  },
  {
    feature: 'Infrastructure',
    aarchid: 'Edge-first',
    plantParent: 'Cloud Bloat',
    blossom: 'Cloud Bloat',
    greg: 'Cloud Bloat',
    rhsGrow: 'Cloud Bloat',
  },
  {
    feature: 'Your Data',
    aarchid: 'You Own It',
    plantParent: 'They Sell It',
    blossom: 'They Sell It',
    greg: 'Community Mining',
    rhsGrow: 'Licensed',
  },
  {
    feature: 'True Profit Motive',
    aarchid: 'Outcomes',
    plantParent: 'Access Tax',
    blossom: 'Access Tax',
    greg: 'Access Tax',
    rhsGrow: 'Access Tax',
  },
]

function renderValue(
  value: string | number,
  isAarchid: boolean
): React.ReactNode {
  if (value === 'Yes') {
    return (
      <span style={{ color: '#224234', fontSize: '18px', fontWeight: '600' }}>
        ●
      </span>
    )
  }
  if (value === 'No') {
    return (
      <span style={{ color: '#495C47', opacity: 0.5, fontSize: '18px' }}>
        ○
      </span>
    )
  }
  // Special styling for strategic differentiator values
  if (typeof value === 'string' && ['Cloud Bloat', 'They Sell It', 'Community Mining', 'Licensed', 'Access Tax', 'You Own It', 'Outcomes', 'Edge-first', 'Unified', 'Regional Silos', 'Fragmented'].includes(value)) {
    if (value === 'Cloud Bloat' || value === 'They Sell It' || value === 'Community Mining' || value === 'Access Tax' || value === 'Regional Silos' || value === 'Fragmented') {
      // Competitor negative positioning
      return (
        <span
          className="font-Lufga"
          style={{
            color: '#8B7355',
            fontWeight: 500,
            opacity: 0.7,
            fontSize: '0.9em',
          }}
        >
          {value}
        </span>
      )
    } else {
      // Aarchid advantages
      return (
        <span
          className="font-Lufga"
          style={{
            color: '#224234',
            fontWeight: 700,
            fontSize: '0.95em',
          }}
        >
          {value}
        </span>
      )
    }
  }
  if (typeof value === 'number' || (typeof value === 'string' && /^\d/.test(value))) {
    return (
      <span
        className="font-Lufga"
        style={{
          color: '#224234',
          fontWeight: isAarchid ? 700 : 500,
          textDecoration: isAarchid ? 'underline' : 'none',
          textDecorationColor: '#224234',
          textUnderlineOffset: '4px',
          textDecorationThickness: '1px',
        }}
      >
        {value}
      </span>
    )
  }
  return (
    <span className="font-Lufga" style={{ color: '#224234' }}>
      {value}
    </span>
  )
}

export function ComparisonMatrix() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <p
          className="text-xs font-Lufga tracking-widest uppercase mb-3"
          style={{ color: '#495C47', fontWeight: 500 }}
        >
          How we compare
        </p>
        <h2
          className="text-4xl md:text-5xl font-Lufga"
          style={{ color: '#224234', fontWeight: 500 }}
        >
          The market charges for access. We charge for outcomes.
        </h2>
      </div>

      <div className="overflow-x-auto" style={{
        boxShadow: 'inset 0 0 0 1px rgba(73, 92, 71, 0.1), 0 4px 24px rgba(34, 66, 52, 0.06)',
        borderRadius: '16px',
        overflow: 'hidden',
      }}>
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: '#EDEDE4', position: 'sticky', top: 0, zIndex: 10 }}>
              <th
                className="font-Lufga font-medium text-left py-4 px-6"
                style={{ color: '#495C47' }}
              >
                Feature
              </th>
              <th
                className="font-Lufga font-medium text-center py-4 px-6 border-l-2"
                style={{
                  backgroundColor: '#224234',
                  color: '#EDEDE4',
                  borderLeftColor: '#224234',
                }}
              >
                Aarchid
              </th>
              <th
                className="font-Lufga font-medium text-center py-4 px-6"
                style={{ backgroundColor: '#F7F5F0', color: '#495C47' }}
              >
                Plant Parent
              </th>
              <th
                className="font-Lufga font-medium text-center py-4 px-6"
                style={{ backgroundColor: '#F7F5F0', color: '#495C47' }}
              >
                Blossom
              </th>
              <th
                className="font-Lufga font-medium text-center py-4 px-6"
                style={{ backgroundColor: '#F7F5F0', color: '#495C47' }}
              >
                Greg
              </th>
              <th
                className="font-Lufga font-medium text-center py-4 px-6"
                style={{ backgroundColor: '#F7F5F0', color: '#495C47' }}
              >
                RHS Grow
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundImage: idx % 2 === 0 
                    ? 'repeating-linear-gradient(0deg, #EDEDE4, #EDEDE4 calc(100% - 1px), rgba(73, 92, 71, 0.08) calc(100% - 1px), rgba(73, 92, 71, 0.08) 100%)'
                    : 'repeating-linear-gradient(0deg, #F7F5F0, #F7F5F0 calc(100% - 1px), rgba(73, 92, 71, 0.08) calc(100% - 1px), rgba(73, 92, 71, 0.08) 100%)',
                }}
              >
                <td
                  className="font-Lufga text-sm py-4 px-6"
                  style={{ color: '#224234' }}
                >
                  {row.feature}
                </td>
                <td
                  className="font-Lufga text-sm py-4 px-6 text-center border-l-2"
                  style={{
                    background: 'linear-gradient(180deg, #F0EDE6 0%, #EDEDE4 100%)',
                    borderLeftColor: '#224234',
                  }}
                >
                  {renderValue(row.aarchid, true)}
                </td>
                <td
                  className="font-Lufga text-sm py-4 px-6 text-center"
                  style={{ color: '#224234' }}
                >
                  {renderValue(row.plantParent, false)}
                </td>
                <td
                  className="font-Lufga text-sm py-4 px-6 text-center"
                  style={{ color: '#224234' }}
                >
                  {renderValue(row.blossom, false)}
                </td>
                <td
                  className="font-Lufga text-sm py-4 px-6 text-center"
                  style={{ color: '#224234' }}
                >
                  {renderValue(row.greg, false)}
                </td>
                <td
                  className="font-Lufga text-sm py-4 px-6 text-center"
                  style={{ color: '#224234' }}
                >
                  {renderValue(row.rhsGrow, false)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          table {
            font-size: 12px;
          }
          th,
          td {
            padding: 12px 8px !important;
          }
        }
      `}</style>
    </div>
  )
}
