import { AboutPage } from './about.po';
import { browser } from 'protractor';

describe('About Page', function() {
  let page: AboutPage;

  beforeEach(() => {
    page = new AboutPage();
  });

  it('should display message saying Hello from AboutComponent ctor', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello from AboutComponent ctor');
  });
});
