import { HomePage } from './home.po';

describe('Home Page', function() {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display message saying Hello from HomeComponent ctor', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello from HomeComponent ctor');
  });
});
