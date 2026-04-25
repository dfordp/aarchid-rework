import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aarchid | AI-Driven Plant Health Diagnostics",
    template: "%s | Aarchid",
  },
  description:
    "Detect, adapt, and grow smarter with every observation. Aarchid uses AI vision and environmental intelligence to diagnose plant health, track growth velocity, and deliver expert-backed care recommendations.",
  keywords: [
    "plant care",
    "plant health",
    "AI plant diagnosis",
    "botanical intelligence",
    "plant health app",
    "plant disease detection",
    "growth tracking",
    "forensic plant analysis",
    "digital twin plant",
    "plant identification",
  ],
  authors: [
    { name: "Dilpreet Grover" },
    { name: "Himanshi Verma" },
    { name: "Dhruv Singhal" },
  ],
  creator: "Aarchid",
  publisher: "Aarchid",
  metadataBase: new URL("https://aarchid.space"),
  alternates: {
    canonical: "https://aarchid.space",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Aarchid",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aarchid.space",
    siteName: "Aarchid",
    title: "Aarchid | AI-Driven Plant Health Diagnostics",
    description:
      "The first $1/month/plant platform. Instant identification, AI health diagnostics, and automated care built on edge infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aarchid — Botanical AI Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarchid | AI-Driven Plant Health Diagnostics",
    description:
      "The first $1/month/plant platform. Instant identification, AI health diagnostics, and automated care built on edge infrastructure.",
    images: ["/og-image.png"],
    creator: "@aarchid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#224234" },
    { media: "(prefers-color-scheme: dark)", color: "#1A2E23" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "'Lufga', sans-serif" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}