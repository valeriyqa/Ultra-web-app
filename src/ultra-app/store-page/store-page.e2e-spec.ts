import { browser, by, element, protractor } from 'protractor';

import { StorePage } from './store-page.po';

describe('StorePage', () => {
  let page: StorePage;

  beforeEach(() => {
    page = new StorePage();
    page.navigateToStore();

    browser.sleep(4000);
  });

  it('should display navbar', () => {
    expect(page.getAppComponent('ultra-navbar-layout').isPresent()).toBeTruthy();
  });

  it('should display RecommendedGamesSlideshowComponent', () => {
    expect(page.getAppComponent('ultra-recommended-games-slideshow').isPresent()).toBeTruthy();
  });

  it('should display SuggestedGamesCarouselComponent', () => {
    expect(page.getAppComponent('ultra-suggested-games-carousel').isPresent()).toBeTruthy();
  });

  it('should display YourWishlistCarouselComponent', () => {
    expect(page.getAppComponent('ultra-your-wishlist-carousel').isPresent()).toBeTruthy();
  });

  it('should display BrowseGamesLayoutComponent', () => {
    expect(page.getAppComponent('ultra-browse-games-layout').isPresent()).toBeTruthy();
  });

  it('should open Shopping Cart by click', async () => {
    const targetEle = await element.all(by.css('ultra-navbar-cart .cart')).get(1);

    await page.initEventClick(targetEle);

    const modalDialog = await element(by.css('.modal-dialog'));
    expect(modalDialog.isPresent()).toBeTruthy();
  });

  it('should go to the Detail Game Page', async () => {
    const targetEle = element
      .all(by.css('a[href*="/store/games"]'))
      .filter((elem) => elem.isDisplayed())
      .first();
    const EC = protractor.ExpectedConditions;

    await browser.wait(EC.presenceOf(targetEle), 3000);
    const href = targetEle.getAttribute('href');
    targetEle.click();
    browser.driver.sleep(1000);
    browser.waitForAngular();
    const curr = await page.getCurrentUrl();

    expect(href).toEqual(curr);
  });
});
