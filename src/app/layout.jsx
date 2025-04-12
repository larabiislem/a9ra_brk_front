import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AQRA - Learn. Hire. Grow.",
  description: "AQRA connects education and employment with high-quality courses and smart hiring",
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import "./globals.css"


import './globals.css'