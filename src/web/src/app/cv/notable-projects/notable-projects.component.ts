import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { NotableProject } from '../../shared/cv';
import { CvService } from '../../shared/cv.service';

@Component({
  selector: 'app-notable-projects',
  templateUrl: './notable-projects.component.html',
  styleUrls: ['./notable-projects.component.scss']
})
export class NotableProjectsComponent implements OnInit {
  model = new Subject<NotableProject[]>();

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService
      .getNotableProjects()
      .subscribe(notableProjects => this.model.next(notableProjects));
  }
}
