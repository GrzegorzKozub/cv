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
  ]
};

const testFooter = <Footer>{ disclaimer: 'disclaimer' };
const testPage = <Page>{ number: 3, last: true, version: 'version' };

export { testCv, testFooter, testPage };
