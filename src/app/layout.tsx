import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/sidebar'
import { QueryProvider } from '@/components/tanstack'
import {
  AccountModal,
  AccountModalProvider
} from '@/components/modals/account-modal'
import { ProductProvider } from '@/context/products'
import { VentasProvider } from '@/context/ventas'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arica Stock - Home',
  description: 'A web app to manage sales from Minimarket Arica'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <VentasProvider>
            <ProductProvider>
              <AccountModalProvider>
                <AccountModal />

                <div className="grid min-h-screen grid-cols-[280px_1fr]">
                  <Sidebar />

                  <main className="flex w-full justify-center gap-x-4 px-6 py-3">
                    {children}
                  </main>
                </div>
              </AccountModalProvider>
            </ProductProvider>
          </VentasProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
