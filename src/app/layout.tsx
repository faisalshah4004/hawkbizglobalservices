import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://hawkbizglobalservices.com'),
  title: {
    default: 'HawkBiz Global Services | Business Setup Consultants in Dubai, UAE',
    template: '%s | HawkBiz Global Services Dubai',
  },
  description:
    'HawkBiz Global Services LLC — expert business setup consultants in Dubai with 20+ years of experience. Company formation, visa services, Hajj & Umrah, certificate attestation, and IT services across UAE.',
  keywords: [
    'business setup dubai',
    'company formation uae',
    'freezone company dubai',
    'mainland company setup',
    'visa services dubai',
    'hajj umrah dubai',
    'certificate attestation uae',
    'pro services dubai',
    'hawkbiz global services',
  ],
  authors: [{ name: 'HawkBiz Global Services LLC' }],
  creator: 'HawkBiz Global Services LLC',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://hawkbizglobalservices.com',
    siteName: 'HawkBiz Global Services',
    title: 'HawkBiz Global Services | Business Setup Consultants in Dubai, UAE',
    description:
      'Expert business setup consultants in Dubai with 20+ years of experience. Freezone, Mainland, Offshore company formation, visa services, and more.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'HawkBiz Global Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HawkBiz Global Services | Business Setup Dubai',
    description: 'Expert business setup consultants in Dubai, UAE. 20+ years of experience.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-dm antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
