import { browser, by, element } from 'protractor';

import { HomePage } from './home-page.po';

describe('HomePage', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
    page.navigateToHome();

    browser.sleep(4000);
  });

  it('should display HomeLayoutComponent', () => {
    expect(page.getAppComponent('ultra-home-layout').isPresent()).toBeTruthy();
  });

  it('should open create game modal', async () => {
    const createGameButton = await element(by.css('.btn-creator'));

    expect(createGameButton.isPresent()).toBeTruthy();

    await page.initEventClick(createGameButton);

    const modal = await element(by.css('ultra-create-game-modal'));
    const input = element(by.css('input[type="text"'));
    const button = element(by.css('button.btn-primary'));

    expect(modal.isPresent()).toBeTruthy();
    expect(input.isPresent()).toBeTruthy();
    expect(button.isPresent()).toBeTruthy();

    input.sendKeys('The Witcher');

    expect(input.getAttribute('value')).toEqual('The Witcher');
  });

  it('should display game list', async () => {
    const gameList = element(by.css('.game-table__body'));

    expect(gameList.isPresent()).toBeTruthy();

    const gameLink = element.all(by.css('ultra-your-games-item a.game__poster')).get(0);

    gameLink.click();

    browser.sleep(4000);

    const url = page.getCurrentUrl();

    expect(url).toContain('/overview');
  });
});
