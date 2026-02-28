"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Langages",
        items: ["Python", "SQL"]
    },
    {
        category: "BI & Data Viz",
        items: ["Power BI"]
    },
    {
        category: "Data Engineering",
        items: ["ETL", "Modélisation", "Structuration"]
    },
    {
        category: "Analyse",
        items: ["Segmentation", "KPI Financiers", "Benchmark"]
    }
];

export function TechStack() {
    return (
        <section id="tech-stack" className="min-h-screen flex items-center py-24 snap-start">
            <div className="container px-6 mx-auto">
                <div className="max-w-3xl mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
                    >
                        Compétences Techniques
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Un socle technologique solide au service de la stratégie analytique.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 border border-muted-foreground/10 rounded-2xl bg-muted/30"
                        >
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-3">
                                {skillGroup.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center text-foreground font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
