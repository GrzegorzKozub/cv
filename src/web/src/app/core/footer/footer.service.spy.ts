import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';

import { footerFake } from './footer.fake';
import { FooterService } from './footer.service';
import { pageFake } from './page.fake';

const footerServiceSpy = jasmine.createSpyObj<FooterService>('FooterService', {
  'getPage': pageFake,
  'getFooter': Observable.of(footerFake)
});

export { footerServiceSpy };
