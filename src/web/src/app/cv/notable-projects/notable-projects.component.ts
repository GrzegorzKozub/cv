import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { ProjectsByCompany } from '../../core/cv/cv';
import { CvService } from '../../core/cv/cv.service';

@Component({
  selector: 'app-notable-projects',
  templateUrl: './notable-projects.component.html',
  styleUrls: ['./notable-projects.component.scss']
})
export class NotableProjectsComponent implements OnInit {
  model = new Subject<ProjectsByCompany[]>();

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService
      .getNotableProjects()
      .subscribe(notableProjects => this.model.next(notableProjects));
  }
}
