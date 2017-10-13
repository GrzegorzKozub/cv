import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CvComponent } from './cv/cv.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'cv', component: CvComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: 'cv' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
