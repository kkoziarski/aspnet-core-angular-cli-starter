import { AspnetCoreAngularCliStarterPage } from './app.po';
import { browser } from 'protractor';


describe('aspnet-core-angular-cli-starter App', function() {
  let page: AspnetCoreAngularCliStarterPage;

  beforeEach(() => {
    page = new AspnetCoreAngularCliStarterPage();
  });

  it('should display message saying Hello from AppComponent', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello from AppComponent');
  });

  it('should redirect to root for incorrect URL', () => {
    browser.get('/non-existing-page-url');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
  });
});
