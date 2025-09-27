import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'DHRUV Blog - Rugs International',
  description: 'Discover the art of handwoven perfection. Premium carpets and rugs.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-inter bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 min-h-screen">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}