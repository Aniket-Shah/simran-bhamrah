export interface PersonalInfo {
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
    { value: "80%", label: "Defect Reduction" },
  ],
};
