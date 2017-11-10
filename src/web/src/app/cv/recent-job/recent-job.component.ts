import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { Job } from '../../core/cv/cv';
import { CvService } from '../../core/cv/cv.service';

@Component({
  selector: 'app-recent-job',
  templateUrl: './recent-job.component.html',
  styleUrls: ['./recent-job.component.scss']
})
export class RecentJobComponent implements OnInit {
  model = new Subject<Job>();

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService
      .getRecentJob()
      .subscribe(recentJob => this.model.next(recentJob));
  }
}
