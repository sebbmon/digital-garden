"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-background relative"
        >
            <div className="max-w-3xl space-y-8 animate-fade-in-up flex flex-col items-center">

                {/* Profile Image */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-background shadow-xl ring-2 ring-primary/20 mb-6">
                    <Image
                        src="/images/me/CVph.jpg"
                        alt="Sebastian Profile"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Subtle badge */}
                <div className="inline-block px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-sm font-medium text-foreground/80 mb-4">
                    Available for new opportunities
                </div>

                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-foreground">
                    {t.hero.greeting} <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">{t.hero.name}</span>.
                </h1>

                <p className="text-xl sm:text-2xl text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
                    {t.hero.tagline}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a
                        href="#projects"
                        className="w-full sm:w-auto px-8 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors shadow-lg shadow-foreground/10"
                    >
                        {t.hero.viewWork}
                    </a>
                    <a
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-3 rounded-full border border-foreground/20 text-foreground font-medium hover:bg-foreground/5 transition-colors"
                    >
                        {t.hero.contactMe}
                    </a>
                </div>
            </div>

            {/* Scroll indicator down arrow */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="#about" className="text-foreground/40 hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
