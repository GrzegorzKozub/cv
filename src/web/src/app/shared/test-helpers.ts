import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

const expectModelInView = (model: Object, view: any) => {
  Object.keys(model).forEach(prop => expect(view).toContain(model[prop]));
};

const getElement = (fixture: ComponentFixture<any>, css: string): any => {
  const found = fixture.debugElement.query(By.css(css));
  return found ? found.nativeElement : null;
};

const getView = (fixture: ComponentFixture<any>, css: string): any => {
  const found = getElement(fixture, css);
  return found ? found.textContent.trim() : null;
};

export { expectModelInView, getElement, getView };
