"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Education } from "@/sections/Education";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { useLanguage } from "@/components/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-foreground/60 border-t border-foreground/5 bg-background text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p>{new Date().getFullYear()} Sebastian Mondel</p>
          <div className="mt-2 text-xs">
            {t.footer.builtWith}
          </div>
        </div>
      </footer>
    </div>
  );
}
