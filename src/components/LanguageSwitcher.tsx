"use client";

import { useTranslation } from "@/lib/i18n/LanguageContext";

export function LanguageSwitcher() {
    const { language, setLanguage } = useTranslation();

    return (
        <div className="flex items-center gap-2 p-1 bg-muted/50 rounded-full border border-muted-foreground/10">
            <button
                onClick={() => setLanguage("fr")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${language === "fr" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
            >
                FR
            </button>
            <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${language === "en" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
            >
                EN
            </button>
        </div>
    );
}
