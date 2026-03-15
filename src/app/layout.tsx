import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Language } from "@/components/dictionaries";
import { LanguageProvider } from "@/components/LanguageContext";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sebastian Mondel",
  description: "A showcase of my projects and skills.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const cookieStore = await cookies();
  const langCookie = cookieStore.get("language")?.value;
  const initialLanguage: Language = langCookie === "pl" ? "pl" : "en";

  return (
    <html lang={initialLanguage} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider initialLanguage={initialLanguage}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}