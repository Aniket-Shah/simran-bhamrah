export interface SkillCategory {
  label: string;
  pills: string[];
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
      "Shell Scripting"
    ]
  },
  {
    label: "Databases & Data",
    pills: [
      "PostgreSQL",
      "Oracle",
      "MySQL",
      "CDP Impala",
      "ETL Pipelines",
      "Data Reconciliation"
    ]
  },
  {
    label: "DevOps & Platforms",
    pills: [
      "CI\/CD",
      "Jenkins",
      "Git",
      "Linux",
      "NGINX",
      "Release Management"
    ]
  },
  {
    label: "CMS & Web",
    pills: [
      "Adobe Experience Manager (AEM 6.5)",
      "HTL (Sightly)",
      "HTML",
      "CSS",
      "SCSS",
      "Postman"
    ]
  }
];
