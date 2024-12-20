import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Dancing_Script } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Quadri Aden: Digital and Traditional Artist from Nigeria",
  description: "Quadri Aden is a versatile and talented artist based in Nigeria, excelling in both digital and traditional art forms. With expertise in tools like Procreate, Adobe Illustrator, Photoshop, and Krita, Quadri creates captivating artworks that bridge the gap between classical techniques and modern technology. Explore his portfolio to discover stunning illustrations, paintings, and designs crafted with precision and creativity.",
  keywords: [
    "Quadri Aden",
    "QuadriAden",
    "Quadri Adeniyi",
    "QuadriAdeniyi",
    "Quadri Orekoya",
    "Digital Artist Nigeria",
    "Traditional Artist Nigeria",
    "Nigerian Freelance Artist",
    "Procreate Artist",
    "Photoshop Digital Artist",
    "Krita Illustrator",
    "Concept Art Nigeria",
    "Portrait Artist Nigeria",
    "Art for Sale in Nigeria",
    "Realism Artist",
    "Freelance Illustrator",
    "Quadri Aden Art Portfolio"
  ],
  openGraph: {
    type: "website",
    title: "Quadri Aden: Digital and Traditional Artist",
    description: "Explore the captivating portfolio of Quadri Aden, a talented Nigerian artist specializing in both digital and traditional art.",
    url: process.env.NEXT_PUBLIC_SITE_DOMAIN,
    images: ["https://utfs.io/f/7zNmq8UK96IeG1QiUAfv5IkLEqxRAsO0WCdVQug1obSiYvBG"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Quadri Aden: Digital and Traditional Artist",
    description: "Explore the captivating portfolio of Quadri Aden, a talented Nigerian artist specializing in both digital and traditional art.",
    images: ["https://utfs.io/f/7zNmq8UK96IeG1QiUAfv5IkLEqxRAsO0WCdVQug1obSiYvBG"]
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dancingscript"
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${dancingScript.variable} font-montserrat antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="flex-1 max-md:px-6 w-full max-w-4xl overflow-x-hidden mx-auto">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}