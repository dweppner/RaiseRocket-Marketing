import type { Metadata } from "next";
import { Providers } from './providers';
import "@fontsource/space-grotesk";
import "@fontsource/inter";
import "@fontsource/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "RaiseRocket - Take Your Salary to the Moon 🚀",
  description: "Navigate your salary negotiation like a space commander. AI-powered strategies to secure the compensation you deserve with confidence and precision. Join 10K+ professionals who've launched their careers into higher orbits.",
  keywords: ["salary negotiation", "AI career coaching", "compensation strategy", "tech salary", "career advancement", "negotiation coaching"],
  authors: [{ name: "RaiseRocket Team" }],
  creator: "RaiseRocket",
  publisher: "RaiseRocket",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://raiserocket.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "RaiseRocket - Take Your Salary to the Moon 🚀",
    description: "Navigate your salary negotiation like a space commander. AI-powered strategies to secure the compensation you deserve.",
    url: 'https://raiserocket.ai',
    siteName: 'RaiseRocket',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RaiseRocket - AI Salary Negotiation Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "RaiseRocket - Take Your Salary to the Moon 🚀",
    description: "Navigate your salary negotiation like a space commander. AI-powered strategies to secure the compensation you deserve.",
    creator: '@raiserocket',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RaiseRocket",
    "description": "AI-powered salary negotiation platform for tech professionals",
    "url": "https://raiserocket.ai",
    "logo": "https://raiserocket.ai/logo.png",
    "sameAs": [
      "https://twitter.com/raiserocket",
      "https://linkedin.com/company/raiserocket"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@raiserocket.ai"
    },
    "service": {
      "@type": "Service",
      "name": "AI Salary Negotiation Coaching",
      "description": "Navigate your salary negotiation like a space commander with AI-powered strategies",
      "provider": {
        "@type": "Organization",
        "name": "RaiseRocket"
      },
      "areaServed": "Worldwide",
      "audience": {
        "@type": "Audience",
        "audienceType": "Tech Professionals"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
