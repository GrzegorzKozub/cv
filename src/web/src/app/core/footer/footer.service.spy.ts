import { of } from 'rxjs';

import { footerFake } from './footer.fake';
import { FooterService } from './footer.service';
import { pageFake } from './page.fake';

const footerServiceSpy = jasmine.createSpyObj<FooterService>('FooterService', {
  'getPage': pageFake,
  'getFooter': of(footerFake)
});

export { footerServiceSpy };
