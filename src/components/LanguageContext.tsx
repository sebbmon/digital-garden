"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Language, Dictionary } from "./dictionaries";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, initialLanguage = "en" }: { children: React.ReactNode, initialLanguage?: Language }) {
    const [language, setLanguageState] = useState<Language>(initialLanguage);

    useEffect(() => {
        // Enforce the initial language in cookies and localStorage on mount
        document.cookie = `language=${initialLanguage}; path=/; max-age=31536000`;
        localStorage.setItem("language", initialLanguage);
    }, [initialLanguage]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
        document.cookie = `language=${lang}; path=/; max-age=31536000`;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: dictionaries[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
