// app/layout.tsx
import type { Metadata } from "next";
import {Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Agar abhi bhi Geist use karna chahta hai toh rakh sakta hai
// Warna comment out kar dena — hum sirf Montserrat + Oswald use karenge

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Google Fonts ko next/font/google se import karna best practice hai (performance + preloading)
import { Montserrat, Oswald } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const metadata: Metadata = {
  title: "LycanWeb - Unleash the Beast in Your Digital Empire",
  description: "Premium web transformations for founders who hunt growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${montserrat.variable} 
          ${oswald.variable} 
          ${geistMono.variable} 
          antialiased
          bg-black text-white
        `}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
