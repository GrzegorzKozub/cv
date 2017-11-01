export interface Cv {
  header: Header;
  recentJob: Job;
  pastJobs: Job[];
  notableProjects: NotableProject[];
  skills: SkillsByCategory[];
}

export interface Header {
  name: string;
  title: string;
  kaizen: string;
  location: string;
  phone: string;
  email: string;
  web: string;
  headline: string;
}

export interface Job {
  company: Company;
  titles: Title[];
}

export interface NotableProject {
  company: Company;
  projects: Project[];
}

export interface SkillsByCategory {
  category: string;
  skills: Skill[];
}

export interface Company {
  name: string;
  sector: string | undefined;
  profile: string | undefined;
}

export interface Title {
  name: string;
  sector: string | undefined;
  time: string;
  tech: string;
  roles: string[];
}

export interface Project {
  name: string;
  time: string;
  summary: string;
}

export interface Skill {
  name: string;
  summary: string;
}
