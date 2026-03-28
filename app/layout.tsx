import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Press_Start_2P } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
});

const pressStart2P = Press_Start_2P({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-pixel',
});

export const metadata: Metadata = {
  title: 'Angel Morales | Full-Stack Developer & Systems Engineer',
  description: 'Portfolio of Angel Alejandro Morales Aguilar - Full-Stack Developer, Computer Systems Engineering Student, and Process Automation Builder. NASA Space Apps 3rd Place Winner.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Python', 'NASA Space Apps', 'Portfolio'],
  authors: [{ name: 'Angel Alejandro Morales Aguilar' }],
  creator: 'Angel Alejandro Morales Aguilar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Angel Morales | Full-Stack Developer',
    description: 'Full-Stack Developer & Computer Systems Engineering Student',
    siteName: 'Angel Morales Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angel Morales | Full-Stack Developer',
    description: 'Full-Stack Developer & Computer Systems Engineering Student',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} font-sans antialiased bg-[#050505] text-[#e0e0e0]`}>
        {children}
        {/* Scanline Overlay */}
        <div className="scanlines" aria-hidden="true" />
        <Analytics />
      </body>
    </html>
  )
}
