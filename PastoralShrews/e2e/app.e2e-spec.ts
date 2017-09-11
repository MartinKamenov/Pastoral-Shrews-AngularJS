import { HomeComponent } from './../src/app/home/home.component';
import { AppPage } from './app.po';
import { element, browser, by } from 'protractor';

describe('pastoral-shrews App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('Should display correct heading message', () => {
         page.navigateToHome();
         expect(element(by.className('homeNav')).getText()).toContain('Pastoral');
     });

   it('Should display search filter', () => {
         page.navigateTo();
         expect(element(by.tagName('h3')).getText()).toContain('Filter');
     });
});
