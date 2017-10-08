import { AppPage } from './app.po';

describe('web App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should set title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Grzegorz Kozub');
  });
});
