import { NgCdvPage } from './app.po';

describe('ng-cdv App', () => {
  let page: NgCdvPage;

  beforeEach(() => {
    page = new NgCdvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
