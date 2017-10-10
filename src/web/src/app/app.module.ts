import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CvModule } from './cv/cv.module';
import { FooterModule } from './footer/footer.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CvModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
