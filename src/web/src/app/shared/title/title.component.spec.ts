import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { getView } from '../test-helpers';
import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show value as text when no label', () => {
    component.value = 'value';
    fixture.detectChanges();
    const label = getView(fixture, '.title .label');
    expect(label).toBeNull();
    const value = getView(fixture, '.title .value');
    expect(value).toBeNull();
    const view = getView(fixture, '.title');
    expect(view).not.toContain('label');
    expect(view).toContain('value');
  });

  it('should show label and value in divs when label given', () => {
    component.label = 'label';
    component.value = 'value';
    fixture.detectChanges();
    const label = getView(fixture, '.title .label');
    expect(label).toEqual('label');
    const value = getView(fixture, '.title .value');
    expect(value).toEqual('value');
  });
});
