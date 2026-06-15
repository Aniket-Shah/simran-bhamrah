// taskflow-create-data.js
// This script creates a managed TaskFlow that writes the portfolio data files.
// It uses the OpenClaw runtime API (api.runtime.tasks.flow) to persist the flow.

const fs = require('fs');
const path = require('path');
const { api } = require('openclaw-runtime'); // Runtime provides TaskFlow API

(async () => {
  // Bind flow to current session (owner = this request)
  const taskFlow = api.runtime.tasks.flow.bindSession({
    sessionKey: 'agent:main',
    requesterOrigin: 'telegram:1746671302',
  });

  // Create managed flow
  const created = taskFlow.createManaged({
    controllerId: 'simran-bhamrah/data-setup',
    goal: 'Populate app/data with typed portfolio data via TaskFlow',
    currentStep: 'init',
    stateJson: { filesCreated: [] },
  });

  if (!created.created) {
    console.error('Flow creation failed:', created.reason);
    process.exit(1);
  }

  const flowId = created.flowId;
  const basePath = '/var/www/html/openClaw/20260614120000_simran-bhamrah';

  async function writeTask({ filename, content, step }) {
    const child = taskFlow.runTask({
      flowId,
      runtime: 'acp',
      childSessionKey: 'agent:main:subagent:file-writer',
      runId: `${step}-${Date.now()}`,
      task: `Write ${filename}`,
      status: 'running',
      startedAt: Date.now(),
      lastEventAt: Date.now(),
    });
    if (!child.created) {
      console.error(`Task ${step} creation failed:`, child.reason);
      process.exit(1);
    }
    // Perform file write synchronously
    const fullPath = path.join(basePath, filename);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf8');

    // Finish child task, updating state with new file
    const finished = taskFlow.finish({
      flowId,
      expectedRevision: child.flow.revision,
      stateJson: {
        ...child.flow.stateJson,
        filesCreated: [...child.flow.stateJson.filesCreated, filename],
      },
    });
    if (!finished.applied) {
      console.error(`Finishing ${step} failed:`, finished.code);
      process.exit(1);
    }
  }

  // Personal data
  await writeTask({
    filename: 'app/data/personal.ts',
    step: 'personal',
    content: `export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  email: string;
  stats: { value: string; label: string }[];
}
export const personal: PersonalInfo = {
  name: "Simran Bhamrah",
  role: "Automation Engineer · Tech Lead · Mumbai",
  bio: "Backend Developer and Tech Lead with 5+ years designing enterprise automation systems, regulatory compliance workflows, and scalable web applications. Built solutions that eliminated 6+ hours of daily manual effort, improved compliance response times by 90%, and cut production defects by 80%.",
  linkedin: "https://www.linkedin.com/in/simran-bhamrah/",
  email: "simranbhamrah1997@gmail.com",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "6 hrs/day", label: "Manual Effort Saved" },
    { value: "90%", label: "Faster Compliance" },
    { value: "80%", label: "Defect Reduction" }
  ]
};`
  });

  // Experience data
  await writeTask({
    filename: 'app/data/experience.ts',
    step: 'experience',
    content: `export interface ExperienceEntry {
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
      "Built and maintained end‑to‑end data pipelines for file ingestion, validation, transformation, reconciliation, and output distribution using Spring Boot, SQL, and Shell Scripting.",
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
      "Resolved 10–15 production issues monthly across cross‑browser testing, DQM, and debugging."
    ]
  }
];`
  });

  // Skills data
  await writeTask({
    filename: 'app/data/skills.ts',
    step: 'skills',
    content: `export interface SkillCategory {
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
];`
  });

  // Finish the overall flow
  const final = taskFlow.finish({
    flowId,
    expectedRevision: created.revision,
    stateJson: { ...created.stateJson, status: 'complete' },
  });
  if (!final.applied) {
    console.error('Flow finalisation failed:', final.code);
    process.exit(1);
  }

  console.log('TaskFlow created successfully. Flow ID:', flowId);
})();
