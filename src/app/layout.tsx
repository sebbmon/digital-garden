import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { Language } from "@/components/dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and skills.",
};

import { LanguageProvider } from "@/components/LanguageContext";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("language")?.value;
  const initialLanguage = (langCookie === "pl" ? "pl" : "en") as Language;

  return (
    <html lang={initialLanguage}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider initialLanguage={initialLanguage}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
