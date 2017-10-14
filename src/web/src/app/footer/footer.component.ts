import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Rx';

import { Footer } from '../shared/footer';
import { FooterService } from '../shared/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  model = new Subject<Footer>();
  pageNumber: number;
  showDisclaimer: boolean;

  constructor(private service: FooterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.service
      .getFooter()
      .subscribe(footer => this.model.next(footer));

    this.activatedRoute.queryParams.subscribe(params => {
      this.pageNumber = params.page;
      this.showDisclaimer = params.page && params.topage && params.page === params.topage;
    });
  }
}
