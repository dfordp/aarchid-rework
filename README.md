# Aarchid: AI-Driven Botanical Intelligence Platform

> **Transforming Plant Care from Generic Reminders to Scientific Asset Protection**

Aarchid is a high-precision "Forensic" plant care ecosystem designed for pro-sumers and rare plant collectors. Unlike traditional care apps that rely on static watering calendars, Aarchid uses Generative Reasoning to diagnose plant health by correlating visual symptoms with hyper-local environmental history.

## 🌿 The Vision

Aarchid reimagines plant stewardship by moving from generic care calendars to scientific asset protection. By treating each plant as a high-value asset, Aarchid delivers medical-grade health reports, growth analytics, and predictive care interventions. Our mission is to put a "Digital Botanist" in every collector's pocket—combining cutting-edge AI vision analysis, real-time environmental data, and expert botanical research into a seamless ecosystem.
## 🚀 Core Functionalities

### 🔍 Forensic Health Audit

The cornerstone of Aarchid's diagnostic system combines multimodal AI analysis with environmental context:

* **Visual Analysis**: Powered by Gemini 1.5 Pro's advanced vision capabilities, our system identifies pests, diseases, nutrient deficiencies, and stress indicators with professional-grade accuracy. Upload a plant photo and receive instant symptom recognition.
* **Environmental Context Intelligence**: Automatically pulls 7-day historical weather data (temperature, humidity, light intensity) from hyper-local sources to establish why a plant is stressed. Our AI correlates environmental patterns with visual symptoms to rule out root causes.
* **Citations & Expert Verification**: Every diagnosis is backed by real-time web research via Perplexity Sonar, with citations to peer-reviewed botanical journals, extension university resources, and expert gardening forums. This ensures actionable, trustworthy recommendations.
* **Severity Scoring**: Each audit concludes with a health score (1-100) and severity categorization (Critical/Warning/Healthy), helping you prioritize care actions.

### 📈 Growth Velocity Tracking

Track your plant's development with precision metrics:

* **Pixel-Based Measurement**: Our computer vision system tracks leaf expansion, stem elongation, and internodal distance across multiple photo logs. Establish baselines and monitor growth trajectories over weeks and months.
* **Species-Specific Benchmarking**: Compare your plant's growth speed against "Ideal Performance" scores for the species, accounting for seasonal variations and light conditions.
* **Growth Insights**: Identify whether your plant is thriving, stagnating, or declining. Receive insights on what environmental factors might accelerate or inhibit growth.

### 🛡️ Asset Management (Pro-sumer Tools)

Manage large collections with enterprise-grade features:

* **Batch Actions**: Log care (watering, feeding, pruning) for 50+ plants simultaneously by grouping them into "Micro-climate" zones—ideal for collectors with diverse environments.
* **Health Certificates**: Generate exportable, timestamped PDF reports verifying a plant's health history, pest-free status, and growth records. Perfect for peer-to-peer plant sales and community authentication.
* **Light Mapping**: Use your device's sensors to scan your home and identify "Safe Zones" for specific plant species based on light requirements. Optimize placement for maximum health.
* **Care History Archives**: Maintain a permanent, searchable log of every intervention (watering, fertilization, treatment) with timestamps, photos, and notes.

### 🎯 Future Capabilities (Roadmap)

* **Predictive Intervention**: AI-powered forecasting of problems 7-14 days in advance.
* **Pest & Disease Library**: An extensible, community-curated database of plant vulnerabilities.
* **Species Recognition**: Automatic identification of unknown plants from photos.
* **Collaboration Features**: Share collections and diagnostics with fellow enthusiasts.

## 🛠️ Technology Stack (The "Edge" Stack)

Our modern, serverless architecture prioritizes scalability, cost-efficiency, and speed:

| Layer | Technology | Purpose | Rationale |
|---|---|---|---|
| Frontend | Next.js (Vercel) + PWA | High-speed SEO, web-access, and "installable" mobile UX | Server-side rendering for SEO; instant cold starts; offline capability via PWA |
| Backend | Cloudflare Workers (Hono) | Secure API orchestration and "Edge" logic processing | Sub-100ms latency globally; low cold-start overhead; built-in DDoS protection |
| Database | Supabase (PostgreSQL) | User plant libraries, Auth, and time-series health data | Open-source reliability; time-series optimizations; LLM-friendly JSON columns |
| Storage | Cloudflare R2 | High-res plant photo storage with Zero Egress Fees | Unlimited bandwidth; no egress charges; perfect for image-heavy workloads |
| AI Brain | Gemini 1.5 + Perplexity Sonar | Multimodal vision and real-time research-augmented logic | Industry-leading vision models; real-time web search integration |

### Architecture Flow

```
User Device (PWA)
    ↓
Next.js API Routes (Vercel)
    ↓
Cloudflare Workers (Hono API)
    ├→ Gemini API (Vision Analysis)
    ├→ Perplexity API (Web Research)
    ├→ OpenWeather API (Environmental Data)
    └→ Supabase PostgreSQL (Data Persistence)
         └→ Cloudflare R2 (Image Storage)
```

### Why This Stack?

- **Cost Efficiency**: Sub-$5/month fixed infrastructure costs; variable pricing scales with usage
- **Zero Egress**: Cloudflare R2 eliminates data transfer fees—critical for a media-heavy application
- **Global Edge Computing**: Workers deployed to 300+ Cloudflare data centers means AI inference happens close to users
- **Developer Experience**: Next.js provides rapid iteration; Hono keeps backend code lean and performant
- **Security**: Cloudflare's DDoS protection, Supabase's row-level security (RLS), and API key isolation

## 📐 UI/UX Strategy: "The Laboratory Dashboard"

Aarchid employs a dual-interface design philosophy to serve both casual users and power users:

### Mobile Experience: "Scan-to-Report"
* **Quick Diagnosis Flow**: Point → Snap → Analyze → Act. Three-tap path from camera to actionable insights
* **Smart Capture Guidance**: AI-powered hints guide users to frame photos optimally for analysis
* **Offline-First**: All core features work offline; syncs when connection returns
* **Notification Nudges**: Reminders based on care history and environmental triggers, not rigid schedules

### Desktop Experience: "Command Centre"
* **Data-Rich Dashboard**: Visualize multiple plants' health scores, growth trends, and care calendars at a glance
* **Deep Analytics**: Export care logs, growth charts, and diagnostic histories
* **Batch Management**: Streamline actions across plant groups (e.g., "Water all southeast window plants")
* **Report Generation**: Compose and export health certificates for sales or community sharing

### Progressive Disclosure
* **Level 1 - Beginners**: Simple health scores (1-100) and plain-language care recommendations
* **Level 2 - Intermediates**: Expandable diagnostic details, environmental data, and growth velocity metrics
* **Level 3 - Experts**: Full forensic data, API access to raw analyses, and integration hooks

## 📈 Business & Marketing Strategy

### Revenue Model: "The Anti-Subscription Approach"
* **Pay-Per-Audit Credits**: Users purchase credit packs for emergency diagnostics—no mandatory monthly fees
* **Pro Tier**: Unlimited audits + batch actions + health certificates for $9.99–$19.99/month
* **Enterprise Features**: Private collections, advanced batch management, and API access for serious collectors

### The Social Flywheel
* **Master Gardener Status**: Expert users verify AI results to earn credits and badges
* **Community Validation**: High-accuracy auditors become trusted verifiers, strengthening the ecosystem
* **Peer-to-Peer Commerce**: Health certificates enable trust-based plant sales within the community

### SEO & Content Engine
* **Automated Case Studies**: Anonymized forensic reports feed a blog engine that ranks for "Sick Plant Diagnosis", "Spider Mites", "Root Rot", etc.
* **Latent Semantic Indexing**: Technical SEO leverages our forensic data to naturally include long-tail botanical keywords
* **Viral Potential**: Users share diagnostic results and health certificates on social media, driving organic traffic

## 💰 Operational Economics

### Cost Breakdown (For 1,000 Active Users)

| Component | Cost | Notes |
|-----------|------|-------|
| Cloudflare Workers | $20.00/mo | Paid plan; $0.50 per million requests |
| Cloudflare R2 Storage | ~$5.00/mo | ~1 TB images; no egress fees |
| Supabase Database | ~$25.00/mo | Mid-tier plan; scales with rows |
| Gemini API Calls | ~$150.00/mo | ~3,000 audits/mo × $0.05/audit |
| Perplexity Sonar | ~$50.00/mo | Research API tier |
| **Total Fixed**  | **~$250/mo** | Or ~$0.25 per user per month |

### Revenue Potential (1,000 Users)

| Tier | Users | ARPU | Monthly Revenue |
|------|-------|------|-----------------|
| Free (with ads) | 850 | $0 | $0 |
| Pro Annual ($150/yr) | 100 | $12.50 | $1,250 |
| Enterprise ($50/mo) | 50 | $50 | $2,500 |
| **Total** | **1,000** | **$3.75** | **$3,750** |

### Unit Economics

* **Gross Margin**: ~96% (after all infrastructure and API costs)
* **Breakeven**: ~50 paying users at Pro tier
* **Payback Period**: < 1 month of revenue at 5% conversion rate

## 🚀 Quick Start Guide

### Prerequisites

* [Node.js](https://nodejs.org/) 18.x or later
* [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (Cloudflare Workers CLI)
* [Supabase CLI](https://supabase.com/docs/guides/cli) (optional, for local PostgreSQL development)
* Git

### Installation & Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/aarchid.git
cd aarchid
```

#### 2. Set Up Environment Variables

Create a `.env.local` file in the web-app root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# APIs
GEMINI_API_KEY=your_gemini_key
PERPLEXITY_API_KEY=your_perplexity_key
OPENWEATHER_API_KEY=your_weather_key

# Deployment
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_API_TOKEN=your_api_token
```

Create a `wrangler.toml` in the backend root for Cloudflare Workers configuration.

#### 3. Install Dependencies

```bash
# Web App
cd web-app
npm install

# Backend
cd ../backend
npm install

# Mobile App
cd ../mobile-app
npm install
```

#### 4. Set Up Supabase Database

```bash
# Initialize Supabase locally (optional)
supabase start

# Apply migrations to your remote Supabase project
supabase db push
```

#### 5. Deploy Cloudflare Workers

```bash
cd backend
wrangler publish
```

#### 6. Run Local Development

```bash
# Terminal 1: Web App
cd web-app
npm run dev

# Terminal 2: Backend (local)
cd backend
wrangler dev

# Terminal 3: Mobile App
cd mobile-app
npm run dev
```

Visit `http://localhost:3000` for the web app.

---

## 📁 Project Structure

```
aarchid/
├── README.md                    # This file
├── package.json                 # Root workspace configuration
│
├── web-app/                     # Next.js Frontend (Vercel)
│   ├── app/                     # App Router pages & layouts
│   │   ├── dashboard/           # Main user dashboard
│   │   ├── audit/               # Forensic audit flow
│   │   ├── collection/          # Plant collection management
│   │   └── api/                 # Next.js API routes (proxy to backend)
│   ├── components/              # Reusable React components
│   │   ├── Scanner.tsx          # Camera input & preprocessing
│   │   ├── HealthScore.tsx      # Health visualization component
│   │   └── GrowthChart.tsx      # Growth velocity graphs
│   ├── lib/                     # Utility functions
│   │   ├── supabase.ts          # Supabase client setup
│   │   ├── api-client.ts        # Backend API calls
│   │   └── image-utils.ts       # Photo processing helpers
│   ├── public/                  # Static assets, manifest (PWA)
│   └── package.json
│
├── backend/                     # Cloudflare Workers (Hono)
│   ├── src/
│   │   ├── index.ts             # Hono app & route setup
│   │   ├── routes/
│   │   │   ├── audit.ts         # POST /api/audit (Gemini integration)
│   │   │   ├── research.ts      # POST /api/research (Perplexity integration)
│   │   │   ├── plants.ts        # CRUD operations for plants
│   │   │   └── photos.ts        # Photo upload & R2 integration
│   │   ├── services/
│   │   │   ├── gemini.ts        # Gemini API wrapper
│   │   │   ├── perplexity.ts    # Perplexity API wrapper
│   │   │   ├── weather.ts       # OpenWeather integration
│   │   │   └── database.ts      # Supabase queries
│   │   ├── middleware/
│   │   │   ├── auth.ts          # JWT verification
│   │   │   └── error.ts         # Error handling
│   │   └── types/               # TypeScript interfaces
│   ├── wrangler.toml            # Cloudflare Workers config
│   └── package.json
│
├── mobile-app/                  # React Native / Flutter (Future)
│   ├── src/
│   │   ├── screens/             # App screens
│   │   ├── components/          # Reusable mobile components
│   │   └── lib/                 # Mobile-specific utilities
│   └── package.json
│
└── docs/                        # Documentation (Future)
    ├── API.md                   # API endpoint reference
    ├── ARCHITECTURE.md          # System design details
    └── CONTRIBUTING.md          # Development guidelines
```

---

## 🔐 Security & Authentication

* **Auth**: Supabase Auth with JWT tokens; biometric login support for mobile
* **Rate Limiting**: Cloudflare Workers enforce 100 requests/minute per user
* **Data Privacy**: All plant data is end-to-end encrypted; diagnostic reports are anonymized for SEO aggregation
* **GDPR Compliance**: One-click data export; account deletion removes all user data within 30 days

---

## 🧪 Testing & Quality

### Run Tests

```bash
# Web App
cd web-app
npm run test

# Backend
cd backend
npm run test
```

### Code Quality

```bash
# Lint & Format
npm run lint
npm run format
```

---

## 📚 API Reference

### Create Forensic Audit

**POST** `/api/audit`

Request:
```json
{
  "plant_id": "abc123",
  "image_url": "https://r2.example.com/photos/plant.jpg",
  "context": {
    "location": "southeast window",
    "last_watered": "2026-03-28"
  }
}
```

Response:
```json
{
  "audit_id": "audit_xyz789",
  "health_score": 72,
  "severity": "warning",
  "diagnosis": "Spider mites detected on undersides of leaves...",
  "recommendations": ["Increase humidity to 60%+", "Spray with neem oil..."],
  "sources": [
    { "title": "Integrated Pest Management for Indoor Plants", "url": "..." }
  ],
  "timestamp": "2026-03-30T14:23:00Z"
}
```

### Upload Plant Photo

**POST** `/api/photos`

Multipart form data:
* `plant_id`: UUID
* `file`: Image file (JPEG, PNG, WebP)

Response:
```json
{
  "photo_id": "photo_123",
  "url": "https://r2.example.com/photos/plant_123_20260330.jpg",
  "upload_timestamp": "2026-03-30T14:23:00Z"
}
```

See [API.md](docs/API.md) for complete endpoint documentation.

---

## 🌱 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines on:
* Code style and formatting
* Submitting pull requests
* Reporting bugs
* Adding new features

### Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and test locally
3. Submit a pull request with a clear description
4. Code review required before merging to `main`

---

## 🛠️ Troubleshooting

### "API Key Not Found" Error
Ensure all environment variables in `.env.local` are set. Verify API keys are valid and have appropriate permissions.

### Photos Not Uploading
Check Cloudflare R2 credentials in `wrangler.toml`. Ensure R2 bucket exists and has public read access configured.

### Slow Audit Response
Gemini API calls typically take 5-8 seconds. Check backend logs: `wrangler tail`. Consider implementing audit queueing for peak loads.

### Database Connection Issues
Verify Supabase credentials and network connectivity. Test locally: `supabase status`.

---

## 📖 Documentation

* [Architecture & System Design](docs/ARCHITECTURE.md)
* [API Reference](docs/API.md)
* [Database Schema](docs/SCHEMA.md)
* [Deployment Guide](docs/DEPLOYMENT.md)
* [Contributing Guide](docs/CONTRIBUTING.md)

---

## 📄 License

Aarchid is licensed under the [MIT License](LICENSE).

---

## 📞 Support & Community

* **Issues & Bugs**: [GitHub Issues](https://github.com/yourusername/aarchid/issues)
* **Discussions**: [GitHub Discussions](https://github.com/yourusername/aarchid/discussions)
* **Email**: support@aarchid.io
* **Twitter**: [@aarchid_ai](https://twitter.com/aarchid_ai)

---

## 🎯 Roadmap & Future Features

### Q2 2026
- [ ] Species auto-identification from photos
- [ ] Predictive pest/disease warnings (7-14 days ahead)
- [ ] Mobile app (React Native launch)

### Q3 2026
- [ ] Collaborative collections (share plants with friends)
- [ ] Community Master Gardener certification program
- [ ] Advanced growth analytics (machine learning forecasting)

### Q4 2026
- [ ] AR plant placement preview ("Will this thrive here?")
- [ ] Integration with smart home systems (auto-watering triggers)
- [ ] Expanded language support (Spanish, Mandarin, Japanese)

---

## 🏁 Status

Aarchid is currently in **active development**. The goal is to replace the "Dumb Calendar" with a "Digital Botanist" in every collector's pocket.

**Join us in revolutionizing plant care!** 🌿

