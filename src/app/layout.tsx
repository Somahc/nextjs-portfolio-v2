import type { Metadata } from 'next'
import './globals.css'
import Header from './components/header'
import Container from './components/container'
import { Providers } from './components/providers'
import { Noto_Sans_JP } from 'next/font/google'
import Footer from './components/footer'
import { ProvidersNextUi } from './providers'

const notoSansJp = Noto_Sans_JP({ weight: ['400', '800'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Somahcのブログ',
  description: 'Somahcのブログ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${notoSansJp.className}`}>
        <Providers>
          <ProvidersNextUi>
            <Header />
            <Container>
              <main className='min-h-lvh'>{children}</main>
            </Container>
            <Footer />
          </ProvidersNextUi>
        </Providers>
      </body>
    </html>
  )
}
