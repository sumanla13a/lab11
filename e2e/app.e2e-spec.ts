import { Lab11Page } from './app.po';

describe('lab11 App', function() {
  let page: Lab11Page;

  beforeEach(() => {
    page = new Lab11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
