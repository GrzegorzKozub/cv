import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContentComponent } from './content/content.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ContentComponent,
    TitleComponent,
  ],
  exports: [
    CommonModule,
    ContentComponent,
    TitleComponent
  ]
})
export class SharedModule { }
