import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aarchid | AI-Driven Plant Health Diagnostics",
  description:
    "Detect, adapt, and grow smarter with every observation. Aarchid uses AI vision and environmental intelligence to diagnose plant health, track growth velocity, and deliver expert-backed care recommendations.",
  keywords: [
    "plant care",
    "plant health",
    "AI plant diagnosis",
    "botanical intelligence",
    "plant health app",
    "forensic plant analysis",
    "growth tracking",
    "plant disease detection",
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
  themeColor: "#16a34a",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Aarchid",
  },
  formatDetection: {
    telephone: false,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <head>
        <meta name="theme-color" content="#16a34a" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}