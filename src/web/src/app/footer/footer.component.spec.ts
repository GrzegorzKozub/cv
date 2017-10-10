import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let queryParams: Subject<Params>;

  beforeEach(async(() => {
    queryParams = new Subject<Params>();
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { queryParams: queryParams }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageNumber', () => {
    const pageNumber = 1;
    queryParams.next({ page: pageNumber });
    expect(component.pageNumber).toEqual(pageNumber);
  });

  it('should showDisclaimer on last page', () => {
    queryParams.next({ page: 1, topage: 1 });
    expect(component.showDisclaimer).toBeTruthy();
  });

  it('should not showDisclaimer on non-last page', () => {
    queryParams.next({ page: 1, topage: 2 });
    expect(component.showDisclaimer).toBeFalsy();
  });
});
