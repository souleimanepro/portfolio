export const translations = {
  fr: {
    role: "Analytics Engineer · Freelance",
    location: "Bron (69500)",
    phone: "07 78 39 54 68",
    email: "souleimane.hadbi@hotmail.fr",
    availability: "Télétravail ou présentiel",
    license: "Permis B · Véhicule personnel",
    linkedin: "https://linkedin.com/in/souleimane-hadbi",
    github: "https://github.com/souleimanepro",
    cvFile: "/CV_Souleimane_Hadbi.pdf",
    bio: "Je transforme des données brutes en décisions business — architecture data de bout en bout, du pipeline Databricks au tableau de bord Power BI.",
    cta: "Me contacter",
    downloadCv: "Télécharger CV",
    freelance: {
      title: "Freelance",
      tjm: "450 €/jour",
      mode: "Hybride / Remote",
      dispo: "Disponible immédiatement",
    },
    stack: {
      title: "Stack",
      categories: [
        { name: "Data Engineering", items: ["Azure Databricks", "dbt"] },
        { name: "Programming", items: ["Python", "SQL"] },
        { name: "BI & Analytics", items: ["Power BI", "Excel"] },
      ],
    },
    sections: {
      projects: "Projets",
      experience: "Expériences",
      education: "Diplômes & Certifications",
      services: "Ce que je propose",
    },
    preview: {
      cta: "Voir le détail",
      projects: {
        stat: "projets livrés",
        highlights: ["+500k enregistrements/an", "15 pays consolidés", "3 architectures from scratch"],
      },
      experience: {
        stat: "ans d'expérience",
        highlights: ["Renault Trucks · Analytics Engineer", "Suez Eau France · BI Developer"],
      },
      education: { statDiploma: "diplômes", statCert: "certif." },
      services: { stat: "domaines d'expertise" },
    },
    projects: [
      {
        title: "Architecture Medallion sur Azure Databricks",
        description:
          "Conception et implémentation d'une architecture Bronze / Silver / Gold sur Databricks. Pipelines PySpark pour l'ingestion incrémentale multi-sources, gestion de données multi-pays.",
        impact: "Architecture déployée from scratch, 0 dépendance externe",
        tags: ["Databricks", "PySpark", "Azure"],
      },
      {
        title: "Consolidation immatriculations MHDV Europe",
        description:
          "Base de données européenne centralisée pour l'immatriculation des camions lourds, consolidant des données fragmentées de +15 pays.",
        impact: "+500 000 enregistrements/an · 5 formats harmonisés",
        tags: ["Databricks", "Power BI", "SQL"],
      },
      {
        title: "Modern Data Stack Project",
        description:
          "Pipeline data complet avec ingestion, transformation dbt, orchestration automatisée et CI/CD via Git.",
        impact: "Déploiements automatisés, zéro intervention manuelle",
        tags: ["dbt", "Git", "CI/CD"],
      },
    ],
    experience: [
      {
        title: "Analytics Engineer",
        company: "Renault Trucks",
        location: "Saint-Priest, France",
        period: "Sept. 2024 – Sept. 2026",
        points: [
          "Ownership complet de l'architecture, des pipelines et des livrables data",
          "Architecture medallion Databricks de zéro, sources hétérogènes",
          "Tableaux de bord Power BI sur le marché européen MHDV",
        ],
        tools: ["Azure Databricks", "Power BI", "Python", "SQL"],
      },
      {
        title: "BI Developer",
        company: "Suez Eau France",
        location: "Caluire-et-Cuire, France",
        period: "Sept. 2022 – Sept. 2024",
        points: [
          "Reporting automatisé pour la visibilité opérationnelle",
          "Tableaux de bord d'aide à la décision pour le management",
          "Standardisation de la documentation et transfert de connaissances",
        ],
        tools: ["SSMS", "Power BI", "Report Builder", "SQL"],
      },
    ],
    education: [
      {
        title: "MSc Data Engineering",
        school: "EPSI Lyon",
        period: "2024 – 2026",
        type: "diploma",
      },
      {
        title: "BUT Science de la Donnée",
        school: "IUT Lyon 2 – Bron",
        period: "2021 – 2024",
        type: "diploma",
      },
      {
        title: "Databricks Certified Data Engineer Associate",
        school: "Databricks",
        period: "2026",
        type: "certification",
      },
    ],
    services: [
      {
        type: "architecture",
        title: "Architecture Data",
        description: "Conception et déploiement d'architectures Medallion (Bronze/Silver/Gold) sur Azure Databricks, de zéro à la production.",
        tags: ["Databricks", "Azure", "Medallion"],
      },
      {
        type: "pipeline",
        title: "Pipelines & DataOps",
        description: "Développement de pipelines PySpark, transformation dbt, orchestration automatisée et CI/CD pour un delivery fiable.",
        tags: ["PySpark", "dbt", "CI/CD", "Git"],
      },
      {
        type: "reporting",
        title: "Reporting & BI",
        description: "Création de tableaux de bord Power BI orientés décision business, avec modélisation des données et documentation.",
        tags: ["Power BI", "SQL", "DAX"],
      },
      {
        type: "consulting",
        title: "Conseil & Structuration",
        description: "Audit, structuration et industrialisation de votre patrimoine data. Accompagnement sur la gouvernance et les bonnes pratiques.",
        tags: ["Conseil", "Audit", "Gouvernance"],
      },
    ],
    lang: "EN",
  },
  en: {
    role: "Analytics Engineer · Freelance",
    location: "Bron (69500)",
    phone: "+33 7 78 39 54 68",
    email: "souleimane.hadbi@hotmail.fr",
    availability: "Remote or on-site",
    license: "Driver's license · Own vehicle",
    linkedin: "https://linkedin.com/in/souleimane-hadbi",
    github: "https://github.com/souleimanepro",
    cvFile: "/CV_Souleimane_Hadbi.pdf",
    bio: "I turn raw data into business decisions — end-to-end data architecture, from Databricks pipelines to Power BI dashboards.",
    cta: "Contact me",
    downloadCv: "Download CV",
    freelance: {
      title: "Freelance",
      tjm: "450 €/day",
      mode: "Hybrid / Remote",
      dispo: "Available immediately",
    },
    stack: {
      title: "Tech Stack",
      categories: [
        { name: "Data Engineering", items: ["Azure Databricks", "dbt"] },
        { name: "Programming", items: ["Python", "SQL"] },
        { name: "BI & Analytics", items: ["Power BI", "Excel"] },
      ],
    },
    sections: {
      projects: "Projects",
      experience: "Experience",
      education: "Education & Certifications",
      services: "What I offer",
    },
    preview: {
      cta: "See details",
      projects: {
        stat: "delivered projects",
        highlights: ["500k+ records/year", "15 countries consolidated", "3 architectures from scratch"],
      },
      experience: {
        stat: "years of experience",
        highlights: ["Renault Trucks · Analytics Engineer", "Suez Eau France · BI Developer"],
      },
      education: { statDiploma: "degrees", statCert: "cert." },
      services: { stat: "areas of expertise" },
    },
    projects: [
      {
        title: "Medallion Architecture on Azure Databricks",
        description:
          "Design and implementation of a Bronze / Silver / Gold architecture on Databricks. PySpark pipelines for incremental multi-source ingestion, multi-country data management.",
        impact: "Deployed from scratch, zero external dependency",
        tags: ["Databricks", "PySpark", "Azure"],
      },
      {
        title: "European MHDV Registration Consolidation",
        description:
          "Centralized European database for heavy truck registrations, consolidating fragmented data from 15+ countries.",
        impact: "500,000+ records/year · 5 formats harmonized",
        tags: ["Databricks", "Power BI", "SQL"],
      },
      {
        title: "Modern Data Stack Project",
        description:
          "Full data pipeline with ingestion, dbt transformation, automated orchestration and CI/CD via Git.",
        impact: "Automated deployments, zero manual intervention",
        tags: ["dbt", "Git", "CI/CD"],
      },
    ],
    experience: [
      {
        title: "Analytics Engineer",
        company: "Renault Trucks",
        location: "Saint-Priest, France",
        period: "Sept. 2024 – Sept. 2026",
        points: [
          "Full ownership of data architecture, pipelines and deliverables",
          "Medallion architecture on Databricks from scratch, heterogeneous sources",
          "Power BI dashboards for the European MHDV market",
        ],
        tools: ["Azure Databricks", "Power BI", "Python", "SQL"],
      },
      {
        title: "BI Developer",
        company: "Suez Eau France",
        location: "Caluire-et-Cuire, France",
        period: "Sept. 2022 – Sept. 2024",
        points: [
          "Automated reporting tools for operational visibility",
          "Decision-support dashboards for management",
          "Documentation standardization and knowledge transfer",
        ],
        tools: ["SSMS", "Power BI", "Report Builder", "SQL"],
      },
    ],
    education: [
      {
        title: "MSc Data Engineering",
        school: "EPSI Lyon",
        period: "2024 – 2026",
        type: "diploma",
      },
      {
        title: "Bachelor of Technology – Data Science",
        school: "IUT Lyon 2 – Bron",
        period: "2021 – 2024",
        type: "diploma",
      },
      {
        title: "Databricks Certified Data Engineer Associate",
        school: "Databricks",
        period: "2026",
        type: "certification",
      },
    ],
    services: [
      {
        type: "architecture",
        title: "Data Architecture",
        description: "Design and deployment of Medallion architectures (Bronze/Silver/Gold) on Azure Databricks, from scratch to production.",
        tags: ["Databricks", "Azure", "Medallion"],
      },
      {
        type: "pipeline",
        title: "Pipelines & DataOps",
        description: "PySpark pipeline development, dbt transformation, automated orchestration and CI/CD for reliable delivery.",
        tags: ["PySpark", "dbt", "CI/CD", "Git"],
      },
      {
        type: "reporting",
        title: "Reporting & BI",
        description: "Business-oriented Power BI dashboards with data modeling and documentation.",
        tags: ["Power BI", "SQL", "DAX"],
      },
      {
        type: "consulting",
        title: "Consulting & Structuring",
        description: "Audit, structuring and industrialization of your data assets. Guidance on governance and best practices.",
        tags: ["Consulting", "Audit", "Governance"],
      },
    ],
    lang: "FR",
  },
};
