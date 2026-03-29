"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-gray-50 text-gray-900 flex flex-col"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="grow pt-24 md:pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
