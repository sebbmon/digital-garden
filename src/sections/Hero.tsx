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

                {/* prof image */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-background shadow-xl ring-2 ring-primary/20 mb-6">
                    <Image
                        src="/images/me/CVph.jpg"
                        alt="Sebastian Profile"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Social badges */}
                <div className="flex flex-wrap gap-3 justify-center mb-4">
                    <a
                        href="https://www.linkedin.com/in/sebastian-mondel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-sm font-medium text-foreground/80 hover:bg-foreground/10 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/sebbmon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-sm font-medium text-foreground/80 hover:bg-foreground/10 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                        GitHub
                    </a>
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

            {/* strzalka w dol */}
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
