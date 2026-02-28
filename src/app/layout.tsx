import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

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
        <LanguageProvider>
          {/* Simple Header */}
          <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
              {/* Can add logo or name here */}
              <span className="font-semibold text-lg tracking-tight">Souleimane Hadbi.</span>
              <div className="flex items-center gap-4">
                <LanguageSwitcher />
              </div>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
