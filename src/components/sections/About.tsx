"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import renaultLogo from "../../../public/renault-logo.png";
import suezLogo from "../../../public/suez-logo.png";

export function About() {
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
                        À propos de moi
                    </motion.h2>

                    <div className="flex flex-col gap-12 mt-12 w-full">
                        {/* Renault Trucks Experience */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-col md:flex-row gap-8 items-start group relative p-8 rounded-3xl bg-background border border-muted-foreground/10 hover:border-accent/30 transition-colors"
                        >
                            {/* Logo Area */}
                            <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white border border-muted-foreground/15 shadow-sm relative overflow-hidden flex items-center justify-center">
                                <Image src={renaultLogo} alt="Renault Trucks Logo" fill className="object-contain p-3 md:p-4" />
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-foreground">Data Analyst & Business Analyst</h3>
                                    <div className="flex flex-col items-start md:items-end gap-1">
                                        <span className="text-sm font-medium text-muted-foreground bg-muted md:px-3 py-1 rounded-full whitespace-nowrap">Aujourd&apos;hui (Master Ingénierie de la Donnée)</span>
                                        <span className="text-xs text-muted-foreground font-semibold">Septembre 2024 — Septembre 2026</span>
                                    </div>
                                </div>
                                <div className="text-lg font-semibold text-muted-foreground mb-6">
                                    Renault Trucks <span className="text-muted-foreground/50 mx-2">•</span> Saint-Priest, France
                                </div>

                                <div className="flex flex-col xl:flex-row gap-8">
                                    <ul className="space-y-4 flex-1">
                                        <li className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-muted-foreground leading-relaxed">Conception et automatisation de dashboards Power BI pour le suivi de <strong className="text-foreground">30+ KPIs</strong> répartis sur les multiples marchés européens.</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-muted-foreground leading-relaxed">Support au reporting stratégique pour les parties prenantes internationales (essentiellement en anglais), renforçant l&apos;adoption de la donnée et l&apos;efficacité décisionnelle.</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-muted-foreground leading-relaxed">Implémentation d&apos;un framework structuré de suivi des KPIs améliorant considérablement la visibilité des performances à travers les différentes Business Units.</p>
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
                            className="flex flex-col md:flex-row gap-8 items-start group relative p-8 rounded-3xl bg-background border border-muted-foreground/10 hover:border-accent/30 transition-colors"
                        >
                            {/* Logo Area */}
                            <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white border border-muted-foreground/15 shadow-sm relative overflow-hidden flex items-center justify-center">
                                <Image src={suezLogo} alt="Suez Eau France Logo" fill className="object-contain p-3 md:p-4 mix-blend-multiply contrast-[1.2] brightness-[1.1] dark:invert dark:mix-blend-normal" />
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-foreground">BI Developer</h3>
                                    <div className="flex flex-col items-start md:items-end gap-1">
                                        <span className="text-sm font-medium text-muted-foreground bg-muted md:px-3 py-1 rounded-full whitespace-nowrap">2 ans (BUT Science de la Donnée)</span>
                                        <span className="text-xs text-muted-foreground font-semibold">Septembre 2022 — Septembre 2024</span>
                                    </div>
                                </div>
                                <div className="text-lg font-semibold text-muted-foreground mb-6">
                                    Suez Eau France <span className="text-muted-foreground/50 mx-2">•</span> Caluire-et-Cuire, France
                                </div>

                                <div className="flex flex-col xl:flex-row gap-8">
                                    <ul className="space-y-4 flex-1">
                                        <li className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-muted-foreground leading-relaxed">Développement et déploiement d&apos;outils de reporting automatisés permettant une nette amélioration de la visibilité sur les opérations terrain.</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-muted-foreground leading-relaxed">Conception de dashboards interactifs d&apos;aide à la décision visant à fluidifier le suivi continu et accroître l&apos;efficacité du reporting interne.</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-muted-foreground leading-relaxed">Création et standardisation d&apos;un processus de documentation technique, accélérant l&apos;adoption des rapports par les équipes et assurant un meilleur transfert des connaissances.</p>
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
