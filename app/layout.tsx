import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const SITE_URL = 'https://letify.cloud'
const OG_IMAGE = '/og-image.png'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Letify – AI Social Media Tool for Malta Real Estate Agents',
    template: '%s | Letify',
  },
  description:
    'Letify helps Malta estate agents grow their listings with AI-powered social media content, CRM, chatbots and analytics. Save 3 hours a day and generate 12× more leads.',
  keywords: [
    'Malta real estate',
    'Malta property agent',
    'real estate social media Malta',
    'letting agent Malta',
    'AI property content Malta',
    'estate agent CRM Malta',
    'Malta property listings',
    'social media automation Malta',
    'Letify',
  ],
  authors: [{ name: 'Letify', url: SITE_URL }],
  creator: 'Letify',
  publisher: 'Letify',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_MT',
    url: SITE_URL,
    siteName: 'Letify',
    title: 'Letify – AI Social Media Tool for Malta Real Estate Agents',
    description:
      'Automate your real estate social media in Malta. AI-generated posts, Reels, chatbots, CRM and analytics — all in one platform.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Letify – AI Letting Assistant for Malta Real Estate Agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letify – AI Social Media Tool for Malta Real Estate Agents',
    description:
      'Automate your real estate social media in Malta. AI posts, chatbots, CRM and analytics.',
    images: [OG_IMAGE],
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
  icons: {
    icon: [
      { url: '/Logo/32.png', sizes: '32x32', type: 'image/png' },
      { url: '/Logo/192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/Logo/180.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/Logo/32.png'],
  },
}

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Letify',
  url: SITE_URL,
  logo: `${SITE_URL}/Logo/192.png`,
  email: 'admin@letify.cloud',
  description:
    'AI-powered social media and CRM platform for real estate agents in Malta.',
  areaServed: { '@type': 'Country', name: 'Malta' },
  sameAs: ['https://app.letify.cloud'],
}

const jsonLdSoftware = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Letify',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: SITE_URL,
  description:
    'AI-powered social media assistant for Malta real estate agents. Generate posts, Reels and graphics automatically, manage your CRM and deploy chatbots.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '0',
    highPrice: '89',
    offerCount: '4',
  },
  provider: jsonLdOrganization,
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Letify help me create content?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Letify uses AI to generate engaging social media posts, captions, and visuals tailored for real estate. Simply input your listing details and our AI creates professional content ready to publish.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which social media platforms does Letify support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Letify supports Facebook, Instagram, TikTok, WhatsApp, and Messenger. We are constantly adding more platforms based on user feedback.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cancel my subscription at any time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Letify safe for my social media accounts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We use secure OAuth authentication and never store your passwords. All data is encrypted and we follow industry best practices for security.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Letify ensure data security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use enterprise-grade encryption, secure servers, and comply with GDPR regulations. Your data is protected with bank-level security measures.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods can I use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do the prices include tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prices are shown excluding tax. Applicable taxes will be calculated and displayed at checkout based on your location.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
