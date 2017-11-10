import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CvService } from '../shared/cv.service';
import { FooterService } from '../shared/footer.service';

@NgModule({
  imports: [CommonModule],
  providers: [CvService, FooterService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule was already loaded');
    }
  }
}
