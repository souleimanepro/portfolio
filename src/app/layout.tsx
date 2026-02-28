import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Souleimane HADBI",
  description: "High-end Data Analyst / Business Analyst portfolio. Structuring Complexity. Enabling Strategic Decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth snap-y snap-mandatory">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        {/* Simple Header */}
        <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between pointer-events-none">
            {/* Can add logo or name here */}
            <span className="font-semibold text-lg tracking-tight pointer-events-auto">Souleimane Hadbi.</span>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
