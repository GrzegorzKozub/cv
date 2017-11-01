import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { Education } from '../../shared/cv';
import { CvService } from '../../shared/cv.service';

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
