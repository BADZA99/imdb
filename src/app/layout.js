import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Imdb Clone',
  description: 'This is the imdb clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        {/* Header */}
        <Header/>

        {/* Navbar */}

        {/* Searchbox */}

        {children}</body>
    </html>
  )
}
