import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Skill } from '../../core/cv/cv';
import { CvService } from '../../core/cv/cv.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  model = new Subject<Skill[]>();

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService
      .getSkills()
      .subscribe(skills => this.model.next(skills));
  }
}
