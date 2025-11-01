/* eslint-disable react/jsx-sort-props */
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import CustomCursor from "@/components/CustomCursorFollower";
import AnimatedCursorIcon from "@/components/AnimatedCursor";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Roboto&display=swap" rel="stylesheet" />
      </head>
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div aria-hidden="true" className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0">
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
          <div
            className="flex items-center justify-center w-full flex-col px-4 h-full
            ">
            <div
              className="flex flex-col h-full z-10 w-full
                ">
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow h-screen overflow-y-scroll scrollbar-hide">{children}</main>
              <AnimatedCursorIcon />
              <CustomCursor />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
