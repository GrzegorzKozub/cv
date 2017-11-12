import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

const expectModelInView = (model: Object, view: any) => {
  Object.keys(model).forEach(prop => expect(view).toContain(model[prop]));
};

const getView = (fixture: ComponentFixture<any>, css: string): any => {
  const found = fixture.debugElement.query(By.css(css));
  return found ? found.nativeElement.textContent.trim() : null;
};

export { expectModelInView, getView };
