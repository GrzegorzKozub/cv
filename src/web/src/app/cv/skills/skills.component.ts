import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { SkillsByCategory } from '../../core/cv/cv';
import { CvService } from '../../core/cv/cv.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  model = new Subject<SkillsByCategory[]>();

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService
      .getSkills()
      .subscribe(skills => this.model.next(skills));
  }
}
