import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingDock } from "@/components/floating-dock";
import { items } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Quadri Ady: Digital and Traditional Artist",
  description: "Quadri Ady is a talented digital and traditional artist from Nigeria.",
};

const playfair = Montserrat({
  subsets: ["latin"],
  variable: "--font-playfair"
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} font-playfair antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="max-md:px-6 w-full max-w-4xl overflow-x-hidden mx-auto">
            {children} 
          </div>
          <FloatingDock items={items} desktopClassName=""/>
        </ThemeProvider>
      </body>
    </html>
  );
}