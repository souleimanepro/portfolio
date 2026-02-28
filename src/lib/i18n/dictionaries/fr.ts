import { Dictionary } from "./en";

export const fr: Dictionary = {
    nav: {
        hero: "Accueil",
        about: "À propos",
        projects: "Projets",
        skills: "Compétences",
        contact: "Contact"
    },
    hero: {
        title: "Souleimane.",
        subtitle: "Data Analyst & Business Analyst.",
        cta: "Découvrez-moi"
    },
    about: {
        title: "À propos de moi",
        renault: {
            title: "Data Analyst & Business Analyst",
            date: "Septembre 2024 — Septembre 2026",
            duration: "Aujourd'hui (Master Ingénierie de la Donnée)",
            bullet1: "Conception et automatisation de dashboards Power BI pour le suivi de <strong className=\"text-foreground\">30+ KPIs</strong> répartis sur les multiples marchés européens.",
            bullet2: "Support au reporting stratégique pour les parties prenantes internationales (essentiellement en anglais), renforçant l'adoption de la donnée et l'efficacité décisionnelle.",
            bullet3: "Implémentation d'un framework structuré de suivi des KPIs améliorant considérablement la visibilité des performances à travers les différentes Business Units.",
        },
        suez: {
            title: "BI Developer",
            date: "Septembre 2022 — Septembre 2024",
            duration: "2 ans (BUT Science de la Donnée)",
            bullet1: "Développement et déploiement d'outils de reporting automatisés permettant une nette amélioration de la visibilité sur les opérations terrain.",
            bullet2: "Conception de dashboards interactifs d'aide à la décision visant à fluidifier le suivi continu et accroître l'efficacité du reporting interne.",
            bullet3: "Création et standardisation d'un processus de documentation technique, accélérant l'adoption des rapports par les équipes et assurant un meilleur transfert des connaissances.",
        }
    },
    skills: {
        title: "Compétences & Profil",
        subtitle: "Créer de la valeur par la maîtrise technique et la compréhension stratégique des enjeux business.",
        softSkills: "Soft Skills",
        languages: "Langues",
        levels: {
            pro: "Professionnel",
            native: "Natif"
        }
    },
    projects: {
        title: "Projets Sélectionnés",
        subtitle: "Exemples d'interventions stratégiques et analytiques.",
        result: "Résultat & Impact",
        stack: "Tech Stack",
        context: "Contexte",
        objective: "Objectif Principal",
        solution: "Solution & Approche (Optionnel)",
        cases: [
            {
                title: "European Used Trucks Performance Dashboard",
                context: "Suite à l'arrêt (decommissioning) de Qlik, nécessité urgente d'assurer la continuité du reporting pour l'activité Véhicules d'Occasion (Used Trucks) sur plus de 20 marchés européens.",
                objective: "Redesigner et implémenter intégralement le tableau de bord de performance sous Power BI pour garantir la continuité des opérations.",
                solution: "Intégration et modélisation de flux de données multi-sources (commandes, ventes, rachats, structures) dans un framework de reporting Power BI unifié et robuste desservant plus de 50 parties prenantes.",
                result: "Standardisation mondiale du suivi des KPIs et réduction de 40% du temps de préparation manuel des rapports grâce à l'automatisation de la consolidation des données."
            },
            {
                title: "European MHDV Market Data Consolidation Platform",
                context: "Nécessité d'obtenir une base d'immatriculations centralisée consolidant les jeux de données fragmentés de plus de 20 pays européens.",
                objective: "Concevoir et implémenter une plateforme unique de consolidation des données de marché pour les véhicules industriels lourds (MHDV).",
                solution: "Développement de pipelines Databricks pour nettoyer, standardiser et harmoniser plus de 5 formats de données hétérogènes (Excel, Dataflows, Power BI), traitant plus de 500k enregistrements annuels.",
                result: "Déploiement d'un dashboard Power BI permettant une analyse croisée de segmentation et de performance par type de carrosserie, réduisant de 60% l'effort manuel de consolidation."
            },
            {
                title: "LCV Competitive Pricing Monitoring",
                context: "Nécessité de reconstruire une solution interne d'intelligence tarifaire du marché suite à l'arrêt d'un fournisseur de données externe coûtant 80 000€/an.",
                objective: "Développer une plateforme automatisée de veille concurrentielle sur les véhicules utilitaires légers (LCV).",
                solution: "Création de pipelines de web scraping automatisés en Python (Playwright) pour collecter et standardiser chaque semaine plus de 1 000 annonces de véhicules sur les marchés NL, UK et IT.",
                result: "Génération d'économies annuelles majeures (80k€/an) et déploiement d'un dashboard de benchmarking compétitif (Trafic, Master et rivaux) évolutif sur l'Europe."
            }
        ]
    },
    contact: {
        titleLine1: "Déployons la valeur",
        titleLine2: "de vos données.",
        available: "Disponible pour missions freelance.",
        open: "Ouvert aux opportunités CDI stratégiques."
    }
};
