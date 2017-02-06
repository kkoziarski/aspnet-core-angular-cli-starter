import { browser, element, by } from 'protractor';

export class AboutPage {
  navigateTo() {
    return browser.get('/about');
  }

  getParagraphText() {
    return element(by.css('app-root-ngnco .starter-template .row h1')).getText();
  }
}
