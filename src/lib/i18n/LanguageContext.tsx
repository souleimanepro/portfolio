"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en, Dictionary } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";

type Language = "fr" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    // Default to French
    const [language, setLanguage] = useState<Language>("fr");

    useEffect(() => {
        const savedLang = localStorage.getItem("portfolio-lang") as Language;
        if (savedLang && (savedLang === "fr" || savedLang === "en")) {
            setLanguage(savedLang);
        }
    }, []);

    const handleChangeLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("portfolio-lang", lang);
    };

    const t = language === "en" ? en : fr;

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleChangeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useTranslation must be used within a LanguageProvider");
    }
    return context;
}
