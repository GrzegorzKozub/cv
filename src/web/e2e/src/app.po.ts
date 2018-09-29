import { browser } from 'protractor';
import { parse } from 'url';

export class AppPage {
  navigateTo(path: string) {
    return browser.get(path);
  }

  getPathName() {
    return browser.getCurrentUrl().then(data => {
      return parse(data).pathname;
    });
  }
}
