export interface SkillCategory {
  label: string;
  pills: string[];
}

export interface BarSkill {
  name: string;
  percent: number;
}

export const skills: SkillCategory[] = [
  {
    label: "Languages & Frameworks",
    pills: [
      "Java 17",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Angular",
      "JavaScript",
      "Python",
      "Shell Scripting",
    ],
  },
  {
    label: "Databases & Data",
    pills: [
      "PostgreSQL",
      "Oracle",
      "MySQL",
      "CDP Impala",
      "ETL Pipelines",
      "Data Reconciliation",
    ],
  },
  {
    label: "DevOps & Platforms",
    pills: [
      "CI/CD",
      "Jenkins",
      "Git",
      "Linux",
      "NGINX",
      "Release Management",
    ],
  },
  {
    label: "CMS & Web",
    pills: [
      "Adobe Experience Manager (AEM 6.5)",
      "HTL (Sightly)",
      "HTML",
      "CSS",
      "SCSS",
      "Postman",
    ],
  },
];

export const barSkills: BarSkill[] = [
  { name: "Java / Spring Boot", percent: 90 },
  { name: "PostgreSQL / Oracle", percent: 85 },
  { name: "Angular / JavaScript", percent: 80 },
  { name: "AEM / HTL (Sightly)", percent: 75 },
  { name: "CI/CD / Jenkins", percent: 80 },
  { name: "Python / Shell Script", percent: 70 },
];
