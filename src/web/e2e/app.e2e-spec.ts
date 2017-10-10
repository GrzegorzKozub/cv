import { AppPage } from './app.po';

describe('web App', () => {
  let page: AppPage;

  const expectPathName = (value: string) =>
    expect(page.getPathName()).toEqual(value);

  beforeEach(() => {
    page = new AppPage();
  });

  for (const pathName of ['/', '/cv', '/unknown']) {
    it(`should redirect ${pathName} to /cv`, () => {
      page.navigateTo(pathName);
      expectPathName('/cv');
    });
  }

  it('should not redirect footer', () => {
    page.navigateTo('/footer');
    expectPathName('/footer');
  });
});
