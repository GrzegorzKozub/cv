import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { Footer } from '../shared/footer';
import { FooterService } from '../shared/footer.service';
import { Page } from '../shared/page';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  page: Page;
  model = new Subject<Footer>();

  constructor(private service: FooterService) { }

  ngOnInit() {
    this.page = this.service.getPage();
    this.service
      .getFooter()
      .subscribe(footer => this.model.next(footer));
  }
}
