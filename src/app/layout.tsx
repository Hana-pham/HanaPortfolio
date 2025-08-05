import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hana Pham",
  description: "Personal portfolio of Hana Pham",
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover", // Prevents white gap on iOS when using fixed bottom bars
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-cream text-dark-grey`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
