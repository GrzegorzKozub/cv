import { Cv } from './cv';
import { Footer } from './footer';
import { Page } from './page';

const testCv = <Cv>{
  header: {
    name: 'header.name',
    title: 'header.title',
    kaizen: 'header.kaizen',
    location: 'header.location',
    phone: 'header.phone',
    email: 'header.email',
    web: 'header.web',
    headline: 'header.headline'
  },
  recentJob: {
    company: {
      name: 'recentJob.company.name',
      sector: 'recentJob.company.sector',
      profile: 'recentJob.company.profile'
    },
    titles: [
      {
        name: 'recentJob.titles[0].name',
        time: 'recentJob.titles[0].time',
        tech: 'recentJob.titles[0].tech',
        roles: ['recentJob.titles[0].roles[0]']
      }
    ]
  },
  pastJobs: [
    {
      company: {
        name: 'pastJobs[0].company.name'
      },
      titles: [
        {
          name: 'pastJobs[0].titles[0].name',
          sector: 'pastJobs[0].titles[0].sector',
          time: 'pastJobs[0].titles[0].time',
          tech: 'pastJobs[0].titles[0].tech',
          roles: ['pastJobs[0].titles[0].roles[0]']
        }
      ]
    }
  ],
  notableProjects: [
    {
      company: {
        name: 'notableProjects[0].company.name'
      },
      projects: [
        {
          name: 'notableProjects[0].projects[0].name',
          time: 'notableProjects[0].projects[0].time',
          summary: 'notableProjects[0].projects[0].summary'
        }
      ]
    }
  ],
  skills: [
    {
      category: 'skills[0].category',
      skills: [
        {
          name: 'skills[0].skills[0].name',
          summary: 'skills[0].skills[0].summary'
        }
      ]
    }
  ],
  education: [
    {
      school: 'education[0].school',
      studies: [
        {
          faculty: 'education[0].studies[0].faculty',
          major: 'education[0].studies[0].major',
          time: 'education[0].studies[0].time',
          thesis: 'education[0].studies[0].thesis',
          grades: 'education[0].studies[0].grades'
        }
      ]
    }
  ]
};

const testFooter = <Footer>{ disclaimer: 'disclaimer' };
const testPage = <Page>{ number: 3, last: true, version: 'version' };

export { testCv, testFooter, testPage };
