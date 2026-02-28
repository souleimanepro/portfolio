"use client";

import { motion } from "framer-motion";
import { Database, LineChart, Globe } from "lucide-react";

const pillars = [
    {
        icon: <Database className="w-6 h-6" />,
        title: "Structuration de données complexes",
        description: "Architectures de données performantes pour des environnements multi-pays et multi-sources. Alignement de datasets hétérogènes pour une vision unifiée."
    },
    {
        icon: <LineChart className="w-6 h-6" />,
        title: "Business & Financial Analytics",
        description: "Modélisation de KPIs, suivi de la performance et création de dashboards exécutifs d'aide à la décision pour le top management."
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Market & Competitive Intelligence",
        description: "Études de marché, scraping de données automatisé, analyse de pricing et segmentation stratégique des portefeuilles."
    }
];

export function Expertise() {
    return (
        <section id="expertise" className="min-h-screen flex items-center py-24 bg-muted/30 snap-start">
            <div className="container px-6 mx-auto">
                <div className="max-w-3xl mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
                    >
                        Positionnement & Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Clarifier la valeur stratégique par la maîtrise technique et la compréhension des enjeux business.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-8 border border-muted-foreground/10 rounded-2xl bg-background hover:border-accent/20 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center text-accent mb-6">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
