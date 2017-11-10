import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { Job } from '../../core/cv/cv';
import { CvService } from '../../core/cv/cv.service';

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
