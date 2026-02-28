"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const caseStacks = [
    ["Azure Databricks", "Power BI", "ETL", "Data Modeling"],
    ["Azure Databricks", "Power BI", "Data Engineering", "Python"],
    ["Python", "Playwright", "Web Scraping", "Power BI", "Data Automation"]
];

export function CaseStudies() {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const cases = t.projects.cases.map((c, i) => ({ ...c, stack: caseStacks[i] }));

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + cases.length) % cases.length);
    };

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 100 : -100,
                opacity: 0,
                scale: 0.95
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 100 : -100,
                opacity: 0,
                scale: 0.95
            };
        }
    };

    return (
        <section id="projects" className="relative min-h-screen flex items-center pt-32 pb-24 bg-background overflow-hidden snap-start">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-foreground"
                        >
                            {t.projects.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            {t.projects.subtitle}
                        </motion.p>
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                                scale: { duration: 0.4 }
                            }}
                            className="w-full"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 item-start">
                                {/* Left Side: Title and Big Impact */}
                                <div className="flex flex-col gap-12">
                                    <h3 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">
                                        {cases[currentIndex].title}
                                    </h3>

                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                                            {t.projects.result}
                                        </h4>
                                        <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground border-l-2 border-accent pl-6 py-2">
                                            {cases[currentIndex].result}
                                        </p>
                                    </div>

                                    {/* Stack Badges directly below Impact on larger screens, or below title */}
                                    <div className="mt-auto pt-8">
                                        <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                                            {t.projects.stack}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {cases[currentIndex].stack.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-muted/50 text-muted-foreground border border-muted-foreground/20 rounded-full text-sm font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Minimal Details */}
                                <div className="grid grid-cols-1 gap-10">
                                    <div className="group">
                                        <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                                            <span className="w-8 h-[1px] bg-muted-foreground/30 group-hover:bg-foreground transition-colors mix-blend-multiply"></span>
                                            {t.projects.context}
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {cases[currentIndex].context}
                                        </p>
                                    </div>

                                    <div className="group">
                                        <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                                            <span className="w-8 h-[1px] bg-muted-foreground/30 group-hover:bg-foreground transition-colors mix-blend-multiply"></span>
                                            {t.projects.objective}
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {cases[currentIndex].objective}
                                        </p>
                                    </div>

                                    <div className="group">
                                        <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                                            <span className="w-8 h-[1px] bg-muted-foreground/30 group-hover:bg-foreground transition-colors mix-blend-multiply"></span>
                                            {t.projects.solution}
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {cases[currentIndex].solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls Move to Bottom for Better Mobile UX */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mt-12"
                >
                    <div className="flex items-center gap-4 border border-muted-foreground/20 rounded-full p-2 bg-background shadow-sm">
                        <button
                            onClick={() => paginate(-1)}
                            className="p-3 rounded-full text-foreground hover:bg-muted transition-all focus:outline-none"
                            aria-label="Previous project"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div className="px-4 font-medium text-sm tabular-nums text-muted-foreground tracking-widest">
                            {String(currentIndex + 1).padStart(2, '0')} <span className="text-foreground/20">/</span> {String(cases.length).padStart(2, '0')}
                        </div>
                        <button
                            onClick={() => paginate(1)}
                            className="p-3 rounded-full text-foreground hover:bg-muted transition-all focus:outline-none"
                            aria-label="Next project"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
