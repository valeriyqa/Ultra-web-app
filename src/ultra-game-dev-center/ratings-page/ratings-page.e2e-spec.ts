import { browser, by, element } from 'protractor';

import { RatingsPage } from './ratings-page.po';

describe('RatingsPage', () => {
  let page: RatingsPage;

  beforeEach(() => {
    page = new RatingsPage();
    page.navigateToRatings();

    browser.sleep(4000);
  });

  it('should display MetacriticLink', () => {
    expect(page.getAppComponent('ultra-metacritic-link').isPresent()).toBeTruthy();
  });

  it('should display Metascore', () => {
    expect(page.getAppComponent('ultra-metascore').isPresent()).toBeTruthy();
  });

  it('should display awards', () => {
    expect(element(by.css('.awards')).isPresent()).toBeTruthy();
  });
});
