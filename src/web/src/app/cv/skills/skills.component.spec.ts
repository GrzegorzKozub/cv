import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cvFake } from '../../core/cv/cv.fake';
import { CvService } from '../../core/cv/cv.service';
import { cvServiceSpy } from '../../core/cv/cv.service.spy';
import { SharedModule } from '../../shared/shared.module';
import { expectModelInView, getView } from '../../shared/test-helpers';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [{ provide: CvService, useValue: cvServiceSpy }],
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
      expect(cvServiceSpy.getSkills).toHaveBeenCalled();
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
        expectModelInView(cvFake.skills[0].tags[0], view);
      });
      component.ngOnInit();
    }));
  });
});
