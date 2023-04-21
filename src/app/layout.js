
import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: 'Imdb Clone',
  description: 'This is the imdb clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Providers> */}
          {/* Header */}
          <Header />

          {/* Navbar */}

          {/* Searchbox */}

          {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}
