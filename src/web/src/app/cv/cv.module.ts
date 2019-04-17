import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CvComponent } from './cv.component';
import { EducationComponent } from './education/education.component';
import { HeaderComponent } from './header/header.component';
import { NotableProjectsComponent } from './notable-projects/notable-projects.component';
import { PastJobsComponent } from './past-jobs/past-jobs.component';
import { RecentJobComponent } from './recent-job/recent-job.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    CvComponent,
    HeaderComponent,
    SkillsComponent,
    RecentJobComponent,
    PastJobsComponent,
    NotableProjectsComponent,
    EducationComponent
  ],
  exports: [CvComponent]
})
export class CvModule { }
