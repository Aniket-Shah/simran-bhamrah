export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  featured: boolean;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "System Engineer / Tech Lead",
    period: "Jul 2023 – Present · Mumbai, India",
    featured: true,
    bullets: [
      "Led design and development of ASM and ESM compliance automation platforms using Java, Spring Boot, PostgreSQL, and REST APIs — eliminating the equivalent of 5–6 manual resources and saving 6 operational hours per day.",
      "Architected regulatory compliance workflows that improved response times by 90% and increased data visibility by 87% for business and regulatory stakeholders.",
      "Increased filing efficiency by 20% and reduced filing errors by 80% by automating validation, reconciliation, and reporting — removing manual intervention across critical compliance workflows.",
      "Built and maintained end-to-end data pipelines for file ingestion, validation, transformation, reconciliation, and output distribution using Spring Boot, SQL, and Shell Scripting.",
      "Migrated 100% of application queries, DDLs, stored procedures, and ETL workflows from Greenplum to Cloudera Data Platform (CDP Impala) — improving query performance and enabling scalable data processing.",
      "Mentored junior engineers, drove technical design discussions, and enforced unit testing standards — achieving an 80% reduction in production defects and improved release quality."
    ]
  },
  {
    company: "Logicserve Digital",
    role: "Junior Associate — AEM Developer",
    period: "Feb 2021 – May 2023 · Mumbai, India",
    featured: false,
    bullets: [
      "Developed and maintained 15+ reusable AEM 6.5 components supporting 10+ Unilever brand websites.",
      "Led migration of 30+ websites and digital assets across Adobe platforms.",
      "Improved website performance by 85–90% and lifted SEO scores to 90 across all migrated properties.",
      "Resolved 10–15 production issues monthly across cross-browser testing, DQM, and debugging."
    ]
  }
];
