/* eslint-disable react/jsx-sort-props */
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
// import CustomCursor from "@/components/CustomCursorFollower";
import AnimatedCursorIcon from "@/components/AnimatedCursor";
import AuroraBackground from "@/components/AuroraBackground";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: "/dev.ico"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

const bodyClass = `${fontSans.variable} min-h-screen bg-background font-sans antialiased scrollbar-hide`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={bodyClass}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <AuroraBackground />
          <div aria-hidden="true" className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0 pointer-events-none">
            <img
              alt="docs left background"
              className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
              data-loaded="true"
              src="/background/docs-left.png"
            />
            <div
              aria-hidden="true"
              className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12">
              <img
                src="/background/docs-right.png"
                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                alt="docs right background"
                data-loaded="true"
              />
            </div>
          </div>
          <div
            className="fixed inset-0 w-full h-full opacity-10 pointer-events-none"
            style={{
              backgroundSize: "50px 50px",
              backgroundImage: `
              linear-gradient(to right, #636363 1px, transparent 1px),
              linear-gradient(to bottom, #636363 1px, transparent 1px)
            `,
              maskImage: `linear-gradient(to bottom, 
              transparent, 
              black 5%, 
              black 90%, 
              transparent 100%
            )`
            }}
          />
          <div className="relative z-10 flex w-full flex-col">
            <main className="w-full pt-16 px-6">
              <div className="container mx-auto max-w-7xl">{children}</div>
            </main>
            <AnimatedCursorIcon />
            {/* <CustomCursor /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
