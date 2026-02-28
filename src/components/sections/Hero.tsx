"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden snap-start">
            {/* Subtle Background Glow for premium feel */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
            <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="container px-6 mx-auto relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-foreground mb-6">
                            Souleimane.<br />
                            <span className="text-muted-foreground text-4xl md:text-5xl block mt-4">Data Analyst & Business Analyst.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex items-center gap-3 text-muted-foreground text-sm font-medium tracking-wide uppercase mt-24"
                    >
                        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
                            />
                        </div>
                        Découvrez-moi
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
