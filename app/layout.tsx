import type { Metadata } from "next"
import { Geist, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] })

export const metadata: Metadata = {
  title: "Happy Birthday, You Bao",
  description: "A little birthday surprise made just for You Bao.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${cormorant.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
