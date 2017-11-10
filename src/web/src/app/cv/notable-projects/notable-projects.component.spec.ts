import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cvFake } from '../../core/cv.fake';
import { CvService } from '../../core/cv.service';
import { expectModelInView, getView } from '../../core/test-helpers';
import { testCvService } from '../../core/test-services';
import { NotableProjectsComponent } from './notable-projects.component';

describe('NotableProjectsComponent', () => {
  let component: NotableProjectsComponent;
  let fixture: ComponentFixture<NotableProjectsComponent>;
  let cvService: CvService;

  beforeEach(async(() => {
    cvService = testCvService;

    TestBed.configureTestingModule({
      providers: [{ provide: CvService, useValue: cvService }],
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

  describe('ngOnInit', () => {
    it('should call getNotableProjects', () => {
      expect(cvService.getNotableProjects).toHaveBeenCalled();
    });

    it('should populate model', async(() => {
      component.model.subscribe(m => expect(m).toEqual(cvFake.notableProjects));
      component.ngOnInit();
    }));

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const view = getView(fixture, '#notable-projects');
        expectModelInView(cvFake.notableProjects[0].company, view);
        expectModelInView(cvFake.notableProjects[0].projects[0], view);
      });
      component.ngOnInit();
    }));
  });
});
