"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Compréhension des enjeux business",
        description: "Alignement avec les directions stratégiques pour définir les objectifs précis, les KPIs de succès et l'impact attendu."
    },
    {
        number: "02",
        title: "Structuration & Nettoyage",
        description: "Audit des sources, extraction, nettoyage des anomalies et harmonisation des datasets hétérogènes."
    },
    {
        number: "03",
        title: "Modélisation & Analyse",
        description: "Création de modèles de données robustes, croisements stratégiques, et analyses statistiques avancées."
    },
    {
        number: "04",
        title: "Production d'insights actionnables",
        description: "Restitution via des dashboards clairs, exécutifs, permettant une prise de décision rapide et éclairée."
    }
];

export function Methodology() {
    return (
        <section id="methodology" className="min-h-screen flex items-center py-24 bg-accent text-accent-foreground snap-start">
            <div className="container px-6 mx-auto">
                <div className="max-w-3xl mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
                    >
                        Méthodologie
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-accent-foreground/80"
                    >
                        Une approche structurée pour garantir la fiabilité et l&apos;adoption à tous les niveaux de l&apos;entreprise.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative p-8 rounded-2xl bg-accent-foreground/5 border border-accent-foreground/10 hover:bg-accent-foreground/10 transition-colors"
                        >
                            <div className="text-4xl font-bold text-accent-foreground/20 mb-6">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-accent-foreground/70 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
