export interface Cv {
  header: Header;
  skills: Skill[];
  recentJob: Job;
  pastJobs: Job[];
  notableProjects: ProjectsByCompany[];
  education: Education[];
}

export interface Header {
  name: string;
  title: string;
  kaizen: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  headline: string;
}

export interface Skill {
  category: string;
  tags: string[];
}

export interface Job {
  company: Company;
  titles: Title[];
}

export interface ProjectsByCompany {
  company: Company;
  projects: Project[];
}

export interface Company {
  name: string;
  profile: string | undefined;
}

export interface Title {
  name: string;
  time: string;
  roles: string[];
}

export interface Project {
  name: string;
  time: string;
  summary: string;
}

export interface Education {
  school: string;
  studies: Study[];
}

export interface Study {
  faculty: string;
  major: string;
  time: string;
}
