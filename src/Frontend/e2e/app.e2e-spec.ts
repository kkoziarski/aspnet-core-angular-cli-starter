import { AspnetCoreAngularCliStarterPage } from './app.po';

describe('aspnet-core-angular-cli-starter App', function() {
  let page: AspnetCoreAngularCliStarterPage;

  beforeEach(() => {
    page = new AspnetCoreAngularCliStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
