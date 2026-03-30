"use client";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { AppProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/Components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-background text-text-primary flex flex-col"
        suppressHydrationWarning
      >
        <AppProvider>
          <Navbar />
          <main className="pt-24 md:pt-32">{children}</main>
          <Footer />
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
