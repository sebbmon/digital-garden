"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

export function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const navLinks = [
        { name: t.nav.home, href: "#home" },
        { name: t.nav.about, href: "#about" },
        { name: t.nav.education, href: "#education" },
        { name: t.nav.projects, href: "#projects" },
        { name: t.nav.contact, href: "#contact" },
    ];

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'pl' : 'en';
        setLanguage(newLang);
    };

    const toggleTheme = () => {
        const newTheme = !isDarkMode ? "dark" : "light";
        setIsDarkMode(!isDarkMode);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/70 dark:bg-[#0f1115]/70 backdrop-blur-md shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a
                            href="#home"
                            onClick={(e) => handleLinkClick(e, "#home")}
                            className="text-xl font-bold tracking-tighter"
                        >
                            Sebastian M<span className="text-primary">.</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Language Toggler */}
                        <button
                            onClick={toggleLanguage}
                            className="p-1.5 flex items-center justify-center rounded-full border border-foreground/10 hover:border-primary/50 transition-all bg-foreground/5 shadow-sm overflow-hidden w-9 h-9"
                            aria-label="Toggle language"
                            title={language === 'en' ? "Switch to Polish" : "Switch to English"}
                        >
                            <img
                                src={language === 'en' ? "https://flagcdn.com/w40/gb.png" : "https://flagcdn.com/w40/pl.png"}
                                alt={language === 'en' ? "English" : "Polski"}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </button>

                        {/* Theme Toggler */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-foreground/80 hover:text-primary transition-colors focus:outline-none rounded-full"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                // Sun icon for switching to light mode
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                // Moon icon for switching to dark mode
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-foreground/80 hover:text-foreground focus:outline-none"
                                aria-label="Toggle mobile menu"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {isMobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-foreground/10 absolute w-full left-0 top-16 shadow-lg">
                    <ul className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary hover:bg-foreground/5 transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
