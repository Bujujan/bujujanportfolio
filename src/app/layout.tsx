import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose weights you use
  variable: "--font-raleway",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Bujujan Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className={`${raleway.variable} antialiased`}>
        <div className="min-h-screen w-full bg-white relative overflow-hidden">
          {/* Grid + Left & Right Gradient Glow */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #f0f0f0 1px, transparent 1px),
                linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
                radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),
                radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent)
              `,
              backgroundSize: `
                96px 64px,
                96px 64px,
                100% 100%,
                100% 100%
              `,
            }}
          />

          {/* page content */}
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
