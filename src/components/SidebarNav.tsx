"use client";

import { useEffect, useState } from "react";

const sections = [
    { id: "hero", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "projects", label: "Projets" },
    { id: "skills", label: "Compétences" },
    { id: "contact", label: "Contact" },
];

export function SidebarNav() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = sections[0].id;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Adjust threshold (e.g., 200px from top) to consider a section "active"
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        currentSection = section.id;
                        break;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4">
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-muted-foreground/20 -z-10"></div>

            {sections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                    <div key={section.id} className="relative flex items-center group cursor-pointer" onClick={() => scrollTo(section.id)}>
                        <div
                            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${isActive
                                ? "bg-accent border-accent scale-100"
                                : "bg-background border-muted-foreground/40 scale-75 group-hover:scale-100 group-hover:border-accent"
                                }`}
                        />
                        <div
                            className={`absolute left-6 text-xs font-semibold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${isActive ? "text-foreground opacity-100 translate-x-0" : "text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                                }`}
                        >
                            {section.label}
                        </div>
                    </div>
                );
            })}
        </nav>
    );
}
