"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cases = [
    {
        title: "European Used Trucks Performance Dashboard",
        context: "Suite à l'arrêt (decommissioning) de Qlik, nécessité urgente d'assurer la continuité du reporting pour l'activité Véhicules d'Occasion (Used Trucks) sur plus de 20 marchés européens.",
        objective: "Redesigner et implémenter intégralement le tableau de bord de performance sous Power BI pour garantir la continuité des opérations.",
        solution: "Intégration et modélisation de flux de données multi-sources (commandes, ventes, rachats, structures) dans un framework de reporting Power BI unifié et robuste desservant plus de 50 parties prenantes.",
        stack: ["Azure Databricks", "Power BI", "ETL", "Data Modeling"],
        result: "Standardisation mondiale du suivi des KPIs et réduction de 40% du temps de préparation manuel des rapports grâce à l'automatisation de la consolidation des données."
    },
    {
        title: "European MHDV Market Data Consolidation Platform",
        context: "Nécessité d'obtenir une base d'immatriculations centralisée consolidant les jeux de données fragmentés de plus de 20 pays européens.",
        objective: "Concevoir et implémenter une plateforme unique de consolidation des données de marché pour les véhicules industriels lourds (MHDV).",
        solution: "Développement de pipelines Databricks pour nettoyer, standardiser et harmoniser plus de 5 formats de données hétérogènes (Excel, Dataflows, Power BI), traitant plus de 500k enregistrements annuels.",
        stack: ["Azure Databricks", "Power BI", "Data Engineering", "Python"],
        result: "Déploiement d'un dashboard Power BI permettant une analyse croisée de segmentation et de performance par type de carrosserie, réduisant de 60% l'effort manuel de consolidation."
    },
    {
        title: "LCV Competitive Pricing Monitoring",
        context: "Nécessité de reconstruire une solution interne d'intelligence tarifaire du marché suite à l'arrêt d'un fournisseur de données externe coûtant 80 000€/an.",
        objective: "Développer une plateforme automatisée de veille concurrentielle sur les véhicules utilitaires légers (LCV).",
        solution: "Création de pipelines de web scraping automatisés en Python (Playwright) pour collecter et standardiser chaque semaine plus de 1 000 annonces de véhicules sur les marchés NL, UK et IT.",
        stack: ["Python", "Playwright", "Web Scraping", "Power BI", "Data Automation"],
        result: "Génération d'économies annuelles majeures (80k€/an) et déploiement d'un dashboard de benchmarking compétitif (Trafic, Master et rivaux) évolutif sur l'Europe."
    },
];

export function CaseStudies() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

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
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-foreground"
                        >
                            Projets Sélectionnés
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            Exemples d&apos;interventions stratégiques et analytiques.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-4 border border-muted-foreground/20 rounded-full p-2"
                    >
                        <button
                            onClick={() => paginate(-1)}
                            className="p-3 rounded-full text-foreground hover:bg-muted transition-all focus:outline-none"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div className="px-4 font-medium text-sm tabular-nums text-muted-foreground tracking-widest">
                            {String(currentIndex + 1).padStart(2, '0')} <span className="text-foreground/20">/</span> {String(cases.length).padStart(2, '0')}
                        </div>
                        <button
                            onClick={() => paginate(1)}
                            className="p-3 rounded-full text-foreground hover:bg-muted transition-all focus:outline-none"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>

                <div className="relative min-h-[500px]">
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
                            className="absolute w-full"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 item-start">
                                {/* Left Side: Title and Big Impact */}
                                <div className="flex flex-col gap-12">
                                    <h3 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">
                                        {cases[currentIndex].title}
                                    </h3>

                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                                            Résultat & Impact
                                        </h4>
                                        <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground border-l-2 border-accent pl-6 py-2">
                                            {cases[currentIndex].result}
                                        </p>
                                    </div>

                                    {/* Stack Badges directly below Impact on larger screens, or below title */}
                                    <div className="mt-auto pt-8">
                                        <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                                            Tech Stack
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
                                            Contexte
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {cases[currentIndex].context}
                                        </p>
                                    </div>

                                    <div className="group">
                                        <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                                            <span className="w-8 h-[1px] bg-muted-foreground/30 group-hover:bg-foreground transition-colors mix-blend-multiply"></span>
                                            Objectif Principal
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {cases[currentIndex].objective}
                                        </p>
                                    </div>

                                    <div className="group">
                                        <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                                            <span className="w-8 h-[1px] bg-muted-foreground/30 group-hover:bg-foreground transition-colors mix-blend-multiply"></span>
                                            Solution & Approche (Optionnel)
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
            </div>
        </section>
    );
}
