import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvComponent } from './cv.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CvComponent],
  exports: [CvComponent]
})
export class CvModule { }
