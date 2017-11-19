import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Education } from '../../core/cv/cv';
import { CvService } from '../../core/cv/cv.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  model = new Subject<Education[]>();

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService
      .getEducation()
      .subscribe(education => this.model.next(education));
  }
}
