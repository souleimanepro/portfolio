export const en = {
    nav: {
        hero: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact"
    },
    hero: {
        title: "Souleimane.",
        subtitle: "Data Analyst & Business Analyst.",
        cta: "Discover my work"
    },
    about: {
        title: "About Me",
        renault: {
            title: "Data Analyst & Business Analyst",
            date: "September 2024 — September 2026",
            duration: "Present (Master's in Data Engineering)",
            bullet1: "Designed and automated Power BI dashboards to monitor <strong className=\"text-foreground\">30+ KPIs</strong> across multiple European markets.",
            bullet2: "Supported strategic reporting for international stakeholders (primarily in English), driving data adoption and decision-making efficiency.",
            bullet3: "Implemented a structured KPI tracking framework, significantly improving performance visibility across various Business Units.",
        },
        suez: {
            title: "BI Developer",
            date: "September 2022 — September 2024",
            duration: "2 years (Bachelor's in Data Science)",
            bullet1: "Developed and deployed automated reporting tools, resulting in a marked improvement in operational visibility in the field.",
            bullet2: "Designed interactive decision-support dashboards to streamline continuous monitoring and increase internal reporting efficiency.",
            bullet3: "Created and standardized a technical documentation process, accelerating report adoption by teams and ensuring better knowledge transfer.",
        }
    },
    skills: {
        title: "Skills & Profile",
        subtitle: "Creating value through technical mastery and strategic understanding of business issues.",
        softSkills: "Soft Skills",
        languages: "Languages",
        levels: {
            pro: "Professional",
            native: "Native"
        }
    },
    projects: {
        title: "Selected Projects",
        subtitle: "Examples of strategic and analytical interventions.",
        result: "Result & Impact",
        stack: "Tech Stack",
        context: "Context",
        objective: "Main Objective",
        solution: "Solution & Approach",
        cases: [
            {
                title: "European Used Trucks Performance Dashboard",
                context: "Following the decommissioning of Qlik, an urgent need arose to ensure reporting continuity for the Used Trucks business across 20+ European markets.",
                objective: "Completely redesign and implement the performance dashboard in Power BI to guarantee business continuity.",
                solution: "Integrated and modeled multi-source data flows (orders, sales, buybacks, structures) into a unified and robust Power BI reporting framework serving over 50 stakeholders.",
                result: "Global standardization of KPI tracking and a 40% reduction in manual report preparation time through automated data consolidation."
            },
            {
                title: "European MHDV Market Data Consolidation Platform",
                context: "Need to establish a centralized registration database consolidating fragmented datasets from over 20 European countries.",
                objective: "Design and implement a unified market data consolidation platform for heavy-duty commercial vehicles (MHDV).",
                solution: "Developed Databricks pipelines to clean, standardize, and harmonize 5+ heterogeneous data formats (Excel, Dataflows, Power BI), processing over 500k records annually.",
                result: "Deployed a Power BI dashboard enabling cross-analysis of segmentation and performance by body type, reducing manual consolidation effort by 60%."
            },
            {
                title: "LCV Competitive Pricing Monitoring",
                context: "Need to rebuild an internal market pricing intelligence solution following the termination of an €80k/year external data provider.",
                objective: "Develop an automated competitive intelligence platform for light commercial vehicles (LCV).",
                solution: "Created automated Python (Playwright) web scraping pipelines to collect and standardize over 1,000 vehicle listings weekly across the NL, UK, and IT markets.",
                result: "Generated significant annual savings (€80k/year) and deployed a scalable competitive benchmarking dashboard (Trafic, Master, and rivals) for Europe."
            }
        ]
    },
    contact: {
        titleLine1: "Let's deploy the value",
        titleLine2: "of your data.",
        available: "Available for freelance missions.",
        open: "Open to strategic full-time opportunities."
    }
};

export type Dictionary = typeof en;
