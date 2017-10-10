import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvComponent } from './cv.component';
import { HeaderComponent } from './header/header.component';
import { RecentJobComponent } from './recent-job/recent-job.component';
import { PastJobsComponent } from './past-jobs/past-jobs.component';
import { NotableProjectsComponent } from './notable-projects/notable-projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CvComponent,
    HeaderComponent,
    RecentJobComponent,
    PastJobsComponent,
    NotableProjectsComponent,
    SkillsComponent,
    EducationComponent
  ],
  exports: [CvComponent]
})
export class CvModule { }
