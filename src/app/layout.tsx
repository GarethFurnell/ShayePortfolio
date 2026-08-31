import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Film By Shaye",
  description: "Portfolio for Shaye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <div className="flex flex-col md:flex-row min-h-screen">
          <Suspense fallback={<aside className="hidden md:block fixed left-0 top-0 h-screen w-72 border-r border-gray-100 bg-white z-50" />}>
            <Sidebar />
          </Suspense>

          {/* Right Main Content */}
          <main className="w-full md:ml-72 flex-1 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
