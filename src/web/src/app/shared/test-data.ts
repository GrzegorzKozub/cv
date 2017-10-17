import { Cv } from './cv';
import { Footer } from './footer';
import { Page } from './page';

const testCv = <Cv>{
  header: {
    name: 'name',
    title: 'title',
    kaizen: 'kaizen',
    location: 'location',
    phone: 'phone',
    email: 'email',
    web: 'web',
    headline: 'headline'
  }
};

const testFooter = <Footer>{ disclaimer: 'disclaimer' };
const testPage = <Page>{ number: 3, last: true };

export { testCv, testFooter, testPage };
