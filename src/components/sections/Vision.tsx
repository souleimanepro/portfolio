"use client";

import { motion } from "framer-motion";

export function Vision() {
    return (
        <section id="vision" className="min-h-screen flex items-center py-24 bg-muted/30 snap-start">
            <div className="container px-6 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-semibold tracking-tight mb-8"
                    >
                        Parcours & Vision
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="p-6 bg-background rounded-2xl border border-muted-foreground/10"
                        >
                            <div className="text-3xl font-bold text-accent mb-2">2 ans</div>
                            <div className="font-semibold mb-1">Suez Eau France</div>
                            <div className="text-sm text-muted-foreground">Premières expériences analytiques et structuration de processus.</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-6 bg-background rounded-2xl border border-muted-foreground/10"
                        >
                            <div className="text-3xl font-bold text-accent mb-2">2 ans</div>
                            <div className="font-semibold mb-1">Renault Trucks Europe</div>
                            <div className="text-sm text-muted-foreground">Pilotage stratégique, intelligence marché et dashboards exécutifs complexes.</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="p-6 bg-background rounded-2xl border border-muted-foreground/10"
                        >
                            <div className="text-3xl font-bold text-accent mb-2">Futur</div>
                            <div className="font-semibold mb-1">Data Science</div>
                            <div className="text-sm text-muted-foreground">Préparation de Master d&apos;ingénierie de la donnée. Transition vers le prédictif et l&apos;IA.</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
