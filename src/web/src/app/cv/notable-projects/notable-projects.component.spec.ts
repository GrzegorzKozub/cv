import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsByCompany } from '../../core/cv';
import { CvService } from '../../core/cv.service';
import { testCv } from '../../core/test-data';
import { expectModelInView, getView } from '../../core/test-helpers';
import { testCvService } from '../../core/test-services';
import { NotableProjectsComponent } from './notable-projects.component';

describe('NotableProjectsComponent', () => {
  let component: NotableProjectsComponent;
  let fixture: ComponentFixture<NotableProjectsComponent>;
  let notableProjects: ProjectsByCompany[];
  let cvService: CvService;

  beforeEach(async(() => {
    notableProjects = testCv.notableProjects;
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
      component.model.subscribe(m => expect(m).toEqual(notableProjects));
      component.ngOnInit();
    }));

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const view = getView(fixture, '#notable-projects');
        expectModelInView(notableProjects[0].company, view);
        expectModelInView(notableProjects[0].projects[0], view);
      });
      component.ngOnInit();
    }));
  });
});
