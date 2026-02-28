"use client";

import { motion } from "framer-motion";
import { BarChart3, Code2, DatabaseZap, CheckCircle2, Languages } from "lucide-react";

const hardSkills = [
    {
        category: "BI & Analytics",
        icon: <BarChart3 className="w-5 h-5 text-accent" />,
        skills: ["Power BI", "DAX", "Advanced Excel", "Data Visualization", "Dashboarding", "KPI Modeling"]
    },
    {
        category: "Programming",
        icon: <Code2 className="w-5 h-5 text-accent" />,
        skills: ["Python", "SQL", "Pandas", "PySpark", "Playwright", "API Integration"]
    },
    {
        category: "Data Engineering",
        icon: <DatabaseZap className="w-5 h-5 text-accent" />,
        skills: ["Azure Databricks", "ETL Pipelines", "Data Warehousing", "Data Modeling", "Web Scraping"]
    }
];

const softSkills = [
    "Autonomous & Results-Focused",
    "Cross-Functional Collaboration",
    "Performance-Oriented Approach",
    "Strong Analytical Thinking",
    "Data-Driven Mindset",
    "Adaptability in International Environments"
];

const languages = [
    { name: "English", level: "Professional" },
    { name: "French", level: "Native" }
];

export function Skills() {
    return (
        <section id="skills" className="min-h-screen flex items-center py-24 bg-background snap-start relative overflow-hidden">
            {/* Ambient Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container px-6 mx-auto relative z-10">
                <div className="max-w-3xl mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-foreground"
                    >
                        Compétences & Profil
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Créer de la valeur par la maîtrise technique et la compréhension stratégique des enjeux business.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Hard Skills Bento Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {hardSkills.map((group, idx) => (
                            <div key={idx} className={`group p-8 rounded-3xl bg-muted/30 border border-muted-foreground/10 hover:border-accent/40 hover:bg-muted/50 transition-all duration-500 overflow-hidden relative ${idx === 0 ? 'sm:col-span-2' : ''}`}>
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                                    {group.icon}
                                </div>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-background border border-muted-foreground/10 rounded-xl shadow-sm text-accent group-hover:text-accent group-hover:scale-110 transition-transform duration-500">
                                        {group.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground tracking-tight">{group.category}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="px-4 py-2 bg-background border border-muted-foreground/10 text-foreground text-sm font-medium rounded-full shadow-sm group-hover:border-accent/20 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Soft Skills & Languages Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-4 flex flex-col gap-4"
                    >
                        {/* Soft Skills Card */}
                        <div className="flex-1 p-8 rounded-3xl bg-accent text-accent-foreground relative overflow-hidden group">
                            {/* Decorative glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700"></div>

                            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                                Soft Skills
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                {softSkills.map((skill, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent-foreground/70 shrink-0 mt-0.5" />
                                        <span className="font-medium text-accent-foreground/90 leading-snug">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Languages Card */}
                        <div className="p-8 rounded-3xl bg-muted border border-muted-foreground/10">
                            <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-3">
                                <Languages className="w-5 h-5 text-muted-foreground" />
                                Langues
                            </h3>
                            <div className="flex flex-col gap-3">
                                {languages.map((lang, idx) => (
                                    <div key={idx} className="flex items-center justify-between pb-3 border-b border-muted-foreground/10 last:border-0 last:pb-0">
                                        <span className="font-semibold text-foreground">{lang.name}</span>
                                        <span className="text-xs tracking-wider uppercase px-3 py-1 bg-background text-muted-foreground rounded-full font-bold">
                                            {lang.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
