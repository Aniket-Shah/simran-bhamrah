export interface PersonalInfo {
  name: string;
  role: string;
  roleShort: string;
  bio: string;
  bioShort: string;
  location: string;
  email: string;
  linkedin: string;
  linkedinHandle: string;
  availability: string;
  stats: { value: string; label: string }[];
}

export const personal: PersonalInfo = {
  name: "Simran Bhamrah",
  role: "Automation Engineer · Tech Lead · Mumbai",
  roleShort: "Automation Engineer | Tech Lead",
  bio: "Backend Developer and Tech Lead with 5+ years designing enterprise automation systems, regulatory compliance workflows, and scalable web applications. Built solutions that eliminated 6+ hours of daily manual effort, improved compliance response times by 90%, and cut production defects by 80%.",
  bioShort:
    "I craft scalable automation systems and compliance platforms that eliminate manual bottlenecks and drive measurable business impact at enterprise scale.",
  location: "Mumbai, India",
  email: "simranbhamrah1997@gmail.com",
  linkedin: "https://www.linkedin.com/in/simran-bhamrah/",
  linkedinHandle: "linkedin.com/in/simran-bhamrah",
  availability: "Open to Opportunities",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "6 hrs/day", label: "Manual Effort Saved" },
    { value: "90%", label: "Faster Compliance" },
    { value: "80%", label: "Defect Reduction" },
  ],
};
