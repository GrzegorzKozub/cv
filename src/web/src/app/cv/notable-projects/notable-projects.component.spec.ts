import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotableProjectsComponent } from './notable-projects.component';

describe('NotableProjectsComponent', () => {
  let component: NotableProjectsComponent;
  let fixture: ComponentFixture<NotableProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotableProjectsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotableProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
