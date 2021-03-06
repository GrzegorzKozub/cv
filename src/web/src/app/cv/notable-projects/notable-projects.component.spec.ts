import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cvFake } from '../../core/cv/cv.fake';
import { CvService } from '../../core/cv/cv.service';
import { cvServiceSpy } from '../../core/cv/cv.service.spy';
import { SharedModule } from '../../shared/shared.module';
import { expectModelInView, getView } from '../../shared/test-helpers';
import { NotableProjectsComponent } from './notable-projects.component';

describe('NotableProjectsComponent', () => {
  let component: NotableProjectsComponent;
  let fixture: ComponentFixture<NotableProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [{ provide: CvService, useValue: cvServiceSpy }],
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
      expect(cvServiceSpy.getNotableProjects).toHaveBeenCalled();
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
