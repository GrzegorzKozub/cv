import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvModule } from './cv/cv.module';
import { FooterModule } from './footer/footer.module';
import { CvService } from './shared/cv.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    CvModule,
    FooterModule
  ],
  providers: [CvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
