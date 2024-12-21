import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corruptbox-Play Sprunki Corruptbox Game Online Free',
  description: 'A revolutionary musical platform that fuses horror aesthetics with experimental music creation',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
       <link rel="alternate" hrefLang="x-default" href="https://corruptboxsprunki.org/"/>
       <link rel="canonical" href="https://corruptboxsprunki.org/"/>
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-EG1RB8XP3Z"></script>
        <script>
           {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EG1RB8XP3Z');
          `}
        </script>
        
     </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}

