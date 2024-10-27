import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import AnimatedCursor from "react-animated-cursor";

import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundLines } from "@/components/ui/background-lines";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <BackgroundBeamsWithCollision className="w-full h-full">
            <div
              className="fixed inset-0 w-full h-full opacity-10 pointer-events-none"
              style={{
                backgroundSize: "50px 50px",
                backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
                maskImage: `linear-gradient(to bottom, 
              transparent, 
              black 5%, 
              black 90%, 
              transparent 100%
            )`
              }}
            />
            <div
              className="flex items-center justify-center w-full flex-col px-4 h-full
            ">
              <div
                className="flex flex-col h-full z-10 w-full
                ">
                <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow h-screen overflow-y-scroll scrollbar-hide">{children}</main>
                <AnimatedCursor
                  innerSize={8}
                  outerSize={35}
                  innerScale={1}
                  outerScale={2}
                  outerAlpha={0}
                  showSystemCursor
                  innerStyle={{
                    backgroundColor: "var(--cursor-color)"
                  }}
                  outerStyle={{
                    border: "3px solid var(--cursor-color)"
                  }}
                />
              </div>
              {/* <BackgroundBeams /> */}
            </div>
          </BackgroundBeamsWithCollision>
        </Providers>
      </body>
    </html>
  );
}
