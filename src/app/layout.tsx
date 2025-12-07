import type { Metadata } from "next";
// import { GoogleAnalytics } from '@next/third-parties/google'

import "@/styles/styles.css";
import { inter, spaceGrotesk } from "@/styles/1-tokens/fonts";

import WebHeader from "./(pages)/_components/Header";
import WebFooter from "./(pages)/_components/Footer";

export const metadata: Metadata = {
  title: "Perfactus",
  description: "",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <WebHeader />
        <main>
          {children}
        </main>
        <WebFooter />
      </body>

      {/* <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_TAG!} /> */}
    </html>
  );
}

export default RootLayout
