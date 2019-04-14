import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { getView } from '../test-helpers';
import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show value as text when no display preference', () => {
    component.value = 'value';
    fixture.detectChanges();
    const value = getView(fixture, '.content');
    expect(value).toEqual('value');
  });

  it('should show value in bullets when asBullets set', () => {
    component.value = ['value'];
    component.asBullets = true;
    fixture.detectChanges();
    const value = getView(fixture, '.content ul li');
    expect(value).toEqual('value');
  });

  it('should show value in paragrahs when asParagraphs set', () => {
    component.value = ['value'];
    component.asParagraphs = true;
    fixture.detectChanges();
    const value = getView(fixture, '.content p');
    expect(value).toEqual('value');
  });
});
