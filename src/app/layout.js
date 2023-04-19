import './globals.css'

export const metadata = {
  title: 'Imdb Clone',
  description: 'This is the imdb clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
