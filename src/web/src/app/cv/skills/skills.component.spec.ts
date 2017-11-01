import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsByCategory } from '../../shared/cv';
import { CvService } from '../../shared/cv.service';
import { testCv } from '../../shared/test-data';
import { expectModelInView, getView } from '../../shared/test-helpers';
import { testCvService } from '../../shared/test-services';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let skills: SkillsByCategory[];
  let cvService: CvService;

  beforeEach(async(() => {
    skills = testCv.skills;
    cvService = testCvService;

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
      component.model.subscribe(m => expect(m).toEqual(skills));
      component.ngOnInit();
    }));

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const view = getView(fixture, '#skills');
        expectModelInView(skills[0].category, view);
        expectModelInView(skills[0].skills[0], view);
      });
      component.ngOnInit();
    }));
  });
});
