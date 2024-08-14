import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { Metadata } from "next"
import { dark } from "@clerk/themes"
import Provider from "./Provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata : Metadata={
  title:"Doc Share",
  description:"A collaborative docs tool"
}

export default function RootLayout({ children }: { children : React.ReactNode}) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
      variables:{ colorPrimary:"#3371FF",
        fontSize:"16px"
      }
    }}>
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
          
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  )
}
