import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { Job } from '../../shared/cv';
import { CvService } from '../../shared/cv.service';

@Component({
  selector: 'app-past-jobs',
  templateUrl: './past-jobs.component.html',
  styleUrls: ['./past-jobs.component.scss']
})
export class PastJobsComponent implements OnInit {
  model = new Subject<Job[]>();

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService
      .getPastJobs()
      .subscribe(pastJobs => this.model.next(pastJobs));
  }
}
