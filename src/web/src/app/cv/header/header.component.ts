import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Header } from '../../core/cv/cv';
import { CvService } from '../../core/cv/cv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  model = new Subject<Header>();

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService
      .getHeader()
      .subscribe(header => this.model.next(header));
  }
}
