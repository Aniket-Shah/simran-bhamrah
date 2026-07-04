export interface ProjectEntry {
  title: string;
  category: string;
  year: number;
  description: string;
  tech: string[];
  impact: { metric: string; label: string }[];
}

export const projects: ProjectEntry[] = [
  {
    title: 'ASM & ESM Compliance Automation',
    category: 'Enterprise Automation',
    year: 2023,
    description:
      'Led end-to-end automation of ASM and ESM compliance platforms — replacing 5–6 manual FTEs with intelligent Spring Boot pipelines for ingestion, validation, reconciliation, and reporting.',
    tech: ['Java 17', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Shell Scripting', 'Linux'],
    impact: [
      { metric: '5–6 hrs', label: 'Saved daily' },
      { metric: '87%', label: 'Data visibility ↑' },
      { metric: '80%', label: 'Errors reduced' },
    ],
  },
  {
    title: 'Regulatory Compliance Workflows',
    category: 'Data Engineering',
    year: 2023,
    description:
      'Architected regulatory data workflows and migrated 100% of ETL pipelines from Greenplum to Cloudera Data Platform (CDP Impala), improving query performance and enabling scalable reporting.',
    tech: ['PostgreSQL', 'CDP Impala', 'ETL Pipelines', 'Microservices', 'Git', 'Jenkins'],
    impact: [
      { metric: '90%', label: 'Faster response' },
      { metric: '20%', label: 'Filing efficiency ↑' },
      { metric: '100%', label: 'CDP migration' },
    ],
  },
  {
    title: 'Unilever Brand Web Platform',
    category: 'CMS Development',
    year: 2022,
    description:
      'Built and maintained 15+ reusable AEM 6.5 components supporting 10+ Unilever brand websites. Led migration of 30+ digital properties, improving performance by 85–90% and lifting SEO scores to 90.',
    tech: ['AEM 6.5', 'HTL (Sightly)', 'HTML', 'CSS', 'SCSS', 'JavaScript', 'Postman'],
    impact: [
      { metric: '15+', label: 'AEM Components' },
      { metric: '30+', label: 'Sites migrated' },
      { metric: '90', label: 'SEO score' },
    ],
  },
];
