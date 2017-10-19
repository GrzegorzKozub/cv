export interface Cv {
  header: Header;
  recentJob: Job;
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

export interface Company {
  name: string;
  sector: string;
  profile: string;
}

export interface Title {
  name: string;
  time: string;
  tech: string;
  roles: string[];
}
