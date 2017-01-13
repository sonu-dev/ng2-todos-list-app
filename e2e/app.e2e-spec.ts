import { Angular2GettingStartedAppPage } from './app.po';

describe('angular2-getting-started-app App', function() {
  let page: Angular2GettingStartedAppPage;

  beforeEach(() => {
    page = new Angular2GettingStartedAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
