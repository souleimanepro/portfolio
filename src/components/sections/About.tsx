"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import renaultLogo from "../../../public/renault-logo.png";
import suezLogo from "../../../public/suez-logo.png";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export function About() {
    const { t } = useTranslation();
    return (
        <section id="about" className="min-h-screen flex items-center py-24 bg-muted/10 border-t border-muted-foreground/10 snap-start">
            <div className="container px-6 mx-auto">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-foreground"
                    >
                        {t.about.title}
                    </motion.h2>

                    <div className="flex flex-col gap-12 mt-12 w-full">
                        {/* Renault Trucks Experience */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group relative p-6 md:p-8 rounded-3xl bg-background border border-muted-foreground/10 hover:border-accent/30 transition-colors"
                        >
                            {/* Header Section for Mobile (Logo + Title) / Just Logo on Desktop */}
                            <div className="flex items-center md:items-start gap-5 w-full md:w-auto mt-2 md:mt-0">
                                <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white border border-muted-foreground/15 shadow-sm relative overflow-hidden flex items-center justify-center">
                                    <Image src={renaultLogo} alt="Renault Trucks Logo" fill className="object-contain p-2 md:p-4" />
                                </div>
                                <div className="flex-1 md:hidden">
                                    <h3 className="text-xl font-bold text-foreground leading-tight">{t.about.renault.title}</h3>
                                    <div className="text-sm font-semibold text-muted-foreground mt-1">{t.about.renault.date}</div>
                                </div>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="hidden md:flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-foreground">{t.about.renault.title}</h3>
                                    <div className="flex flex-col items-start md:items-end gap-1">
                                        <span className="text-sm font-medium text-muted-foreground bg-muted md:px-3 py-1 rounded-full whitespace-nowrap">{t.about.renault.duration}</span>
                                        <span className="text-xs text-muted-foreground font-semibold">{t.about.renault.date}</span>
                                    </div>
                                </div>
                                {/* Mobile Duration Badge */}
                                <div className="md:hidden mb-4">
                                    <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-full whitespace-nowrap inline-block">{t.about.renault.duration}</span>
                                </div>
                                <div className="text-lg font-semibold text-muted-foreground mb-6">
                                    Renault Trucks <span className="text-muted-foreground/50 mx-2">•</span> Saint-Priest, France
                                </div>

                                <div className="flex flex-col xl:flex-row gap-8">
                                    <ul className="space-y-4 flex-1">
                                        <li className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.renault.bullet1 }}></p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.renault.bullet2 }}></p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.renault.bullet3 }}></p>
                                        </li>
                                    </ul>
                                    <div className="flex flex-row xl:flex-col flex-wrap lg:w-48 gap-2 shrink-0 h-fit bg-muted/30 p-4 rounded-2xl border border-muted-foreground/5">
                                        <h4 className="text-sm font-semibold text-foreground w-full mb-1">Tech Stack</h4>
                                        {["Azure Databricks", "Power BI", "Python", "SQL", "Data Engineering"].map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-background border border-muted-foreground/10 text-muted-foreground text-xs font-medium rounded-md w-fit">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Suez Experience */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group relative p-6 md:p-8 rounded-3xl bg-background border border-muted-foreground/10 hover:border-accent/30 transition-colors"
                        >
                            {/* Header Section for Mobile (Logo + Title) / Just Logo on Desktop */}
                            <div className="flex items-center md:items-start gap-5 w-full md:w-auto mt-2 md:mt-0">
                                <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white border border-muted-foreground/15 shadow-sm relative overflow-hidden flex items-center justify-center">
                                    <Image src={suezLogo} alt="Suez Eau France Logo" fill className="object-contain p-2 md:p-4 mix-blend-multiply contrast-[1.2] brightness-[1.1] dark:invert dark:mix-blend-normal" />
                                </div>
                                <div className="flex-1 md:hidden">
                                    <h3 className="text-xl font-bold text-foreground leading-tight">{t.about.suez.title}</h3>
                                    <div className="text-sm font-semibold text-muted-foreground mt-1">{t.about.suez.date}</div>
                                </div>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="hidden md:flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-foreground">{t.about.suez.title}</h3>
                                    <div className="flex flex-col items-start md:items-end gap-1">
                                        <span className="text-sm font-medium text-muted-foreground bg-muted md:px-3 py-1 rounded-full whitespace-nowrap">{t.about.suez.duration}</span>
                                        <span className="text-xs text-muted-foreground font-semibold">{t.about.suez.date}</span>
                                    </div>
                                </div>
                                {/* Mobile Duration Badge */}
                                <div className="md:hidden mb-4">
                                    <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-full whitespace-nowrap inline-block">{t.about.suez.duration}</span>
                                </div>
                                <div className="text-lg font-semibold text-muted-foreground mb-6">
                                    Suez Eau France <span className="text-muted-foreground/50 mx-2">•</span> Caluire-et-Cuire, France
                                </div>

                                <div className="flex flex-col xl:flex-row gap-8">
                                    <ul className="space-y-4 flex-1">
                                        <li className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.suez.bullet1 }}></p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.suez.bullet2 }}></p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.suez.bullet3 }}></p>
                                        </li>
                                    </ul>
                                    <div className="flex flex-row xl:flex-col flex-wrap lg:w-48 gap-2 shrink-0 h-fit bg-muted/30 p-4 rounded-2xl border border-muted-foreground/5">
                                        <h4 className="text-sm font-semibold text-foreground w-full mb-1">Tech Stack</h4>
                                        {["Power BI", "DAX", "SQL", "ETL", "Advanced Excel"].map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-background border border-muted-foreground/10 text-muted-foreground text-xs font-medium rounded-md w-fit">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
