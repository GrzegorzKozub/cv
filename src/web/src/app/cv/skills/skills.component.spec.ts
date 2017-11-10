import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cvFake } from '../../core/cv.fake';
import { CvService } from '../../core/cv.service';
import { cvServiceSpy } from '../../core/cv.service.spy';
import { expectModelInView, getView } from '../../core/test-helpers';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let cvService: CvService;

  beforeEach(async(() => {
    cvService = cvServiceSpy;

    TestBed.configureTestingModule({
      providers: [{ provide: CvService, useValue: cvService }],
      declarations: [SkillsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getSkills', () => {
      expect(cvService.getSkills).toHaveBeenCalled();
    });

    it('should populate model', async(() => {
      component.model.subscribe(m => expect(m).toEqual(cvFake.skills));
      component.ngOnInit();
    }));

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const view = getView(fixture, '#skills');
        expectModelInView(cvFake.skills[0].category, view);
        expectModelInView(cvFake.skills[0].skills[0], view);
      });
      component.ngOnInit();
    }));
  });
});
