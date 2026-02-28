"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center py-24 border-t border-muted-foreground/10 snap-start">
            <div className="container px-6 mx-auto">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
                        >
                            Déployons la valeur <br />
                            <span className="text-muted-foreground">de vos données.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg text-foreground font-medium mb-2"
                        >
                            Disponible pour missions freelance.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-md text-muted-foreground"
                        >
                            Ouvert aux opportunités CDI stratégiques.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col gap-4 w-full md:w-auto"
                    >
                        <a
                            href="mailto:souleimane.hadbi@hotmail.fr"
                            className="group inline-flex h-14 items-center justify-between rounded-full bg-accent px-8 font-medium text-accent-foreground transition-all duration-300 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                        >
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5" />
                                <span>souleimane.hadbi@hotmail.fr</span>
                            </div>
                            <ArrowUpRight className="ml-4 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>

                        <a
                            href="tel:+33778395468"
                            className="group inline-flex h-14 items-center justify-between rounded-full bg-muted px-8 font-medium text-foreground transition-all duration-300 hover:bg-muted-foreground/10 focus:outline-none focus:ring-2 focus:ring-muted-foreground focus:ring-offset-2 focus:ring-offset-background"
                        >
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5" />
                                <span>07 78 39 54 68</span>
                            </div>
                            <ArrowUpRight className="ml-4 h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/souleimane-hadbi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex h-14 items-center justify-between rounded-full bg-muted px-8 font-medium text-foreground transition-all duration-300 hover:bg-muted-foreground/10 focus:outline-none focus:ring-2 focus:ring-muted-foreground focus:ring-offset-2 focus:ring-offset-background"
                        >
                            <div className="flex items-center gap-3">
                                <Linkedin className="w-5 h-5" />
                                <span>linkedin.com/in/souleimane-hadbi</span>
                            </div>
                            <ArrowUpRight className="ml-4 h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
