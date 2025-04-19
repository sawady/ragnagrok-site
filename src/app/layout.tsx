import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Remove Head and Link from 'next/head' and 'next/link' here, they are not used correctly in layout for favicon
import { Navbar } from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ragnagrok",
  description: "Ragnagrok Learning Platform",
  // Add favicon link here for Next.js App Router
  icons: {
    icon: "/favicon.png", // Or '/favicon.ico' if you have that
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      {/* Ensure html takes full height */}
      {/* Remove the <Head> tag here, metadata handles the head content */}
      <body
        // Use flexbox to push footer down
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-full bg-gray-50 dark:bg-gray-950`}
      >
        <Navbar />
        {/* Make the main content area grow to fill available space */}
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 sm:p-0 font-[family-name:var(--font-geist-sans)]">
          {children}
        </div>
        {/* Footer remains the same, but flexbox in body pushes it down */}
        <footer className="text-center p-6 sm:p-8 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 mt-auto">
          © {new Date().getFullYear()} Ragnagrok
        </footer>
      </body>
    </html>
  );
}
