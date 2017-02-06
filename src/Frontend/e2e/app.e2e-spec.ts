import { AspnetCoreAngularCliStarterPage } from './app.po';

describe('aspnet-core-angular-cli-starter App', function() {
  let page: AspnetCoreAngularCliStarterPage;

  beforeEach(() => {
    page = new AspnetCoreAngularCliStarterPage();
  });

  it('should display message saying Hello from AppComponent', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello from AppComponent');
  });
});
