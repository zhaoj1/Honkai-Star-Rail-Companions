import { Inter } from 'next/font/google'
import './globals.css'

import Image from 'next/image'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Honkai: Star Rail Companions',
  description: 'Honkai: Star Rail Companion Characters Stats',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-radial from-dark-blue from-50% to-dark-purple text-white`}>
        <Image
          src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/logo/bg.png"
          fill={true}
          alt="star-rail"
          className="opacity-10 absolute object-contain"
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
