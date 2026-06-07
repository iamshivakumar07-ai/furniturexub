import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FurnitureHub — Premium Furniture Marketplace',
    template: '%s | FurnitureHub',
  },
  description: 'Discover premium furniture from top sellers. Shop sofas, beds, chairs, tables and more.',
  keywords: ['furniture', 'marketplace', 'sofa', 'bed', 'chair', 'table', 'buy furniture online'],
  authors: [{ name: 'FurnitureHub' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'FurnitureHub',
    title: 'FurnitureHub — Premium Furniture Marketplace',
    description: 'Discover premium furniture from top sellers.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
              borderRadius: '8px',
            },
          }}
        />
      </body>
    </html>
  )
}
