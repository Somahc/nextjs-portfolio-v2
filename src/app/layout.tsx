import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'
import Header from './components/header'
import Container from './components/container'
import { Providers } from './components/providers'
import { Noto_Sans_JP } from 'next/font/google'
import Footer from './components/footer'
import { ProvidersNextUi } from './providers'
import Favicon from './icon.png'

const notoSansJp = Noto_Sans_JP({ weight: ['400', '800'], subsets: ['latin'] })
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://nextjs-portfolio-v2-one.vercel.app'),
  title: 'Somahcのブログ',
  description: 'Somahcのブログ',
  icons: [{ rel: 'icon', url: Favicon.src }], // ファビコン
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
      {!!process.env.GA_MEASUREMENT_ID && <GoogleTagManager gtmId={GA_MEASUREMENT_ID} />}
    </html>
  )
}
