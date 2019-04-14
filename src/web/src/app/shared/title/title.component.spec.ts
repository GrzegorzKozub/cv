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

  it('should show value', () => {
    component.value = 'value';
    fixture.detectChanges();
    const value = getView(fixture, '.title');
    expect(value).toEqual('value');
  });
});
