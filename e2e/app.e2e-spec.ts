import { Angular22048Page } from './app.po';

describe('angular2-2048 App', function() {
  let page: Angular22048Page;

  beforeEach(() => {
    page = new Angular22048Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
