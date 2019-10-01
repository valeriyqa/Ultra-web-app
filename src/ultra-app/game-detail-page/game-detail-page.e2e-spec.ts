import { browser, by, element } from 'protractor';

import { GameDetailPage } from './game-detail-page.po';
import { SignInPage } from '../../auth/sign-in-page/sign-in-page.po';

it('should login', () => {
  const signInPage = new SignInPage();
  const page = new GameDetailPage();
  signInPage.signIn();
  browser.sleep(2000);

  expect(page.getCurrentUrl()).toContain('/store');
});

describe('GameDetailPage', () => {
  let page: GameDetailPage;

  beforeEach(() => {
    page = new GameDetailPage();
    page.navigateToGame();

    browser.sleep(4000);
  });

  it('should display GameDetailPreviewComponent', async () => {
    expect(page.getAppComponent('ultra-game-detail-preview').isPresent()).toBeTruthy();
  });

  it('should display GameDetailAboutComponent', () => {
    expect(page.getAppComponent('ultra-game-detail-about').isPresent()).toBeTruthy();
  });

  it('should display GameDetailDetailComponent', () => {
    expect(page.getAppComponent('ultra-game-detail-detail').isPresent()).toBeTruthy();
  });

  it('should open shareList by click', async () => {
    const targetEle = await element(by.id('shareList'));

    await page.initEventClick(targetEle);

    const dropdownMenu = await element(by.css('.game-detail .dropdown-menu')).getAttribute('class');
    expect(dropdownMenu).toContain('show');
  });

  it('should open Shopping Cart by click', async () => {
    const btn = await element(by.css('.btn-buy-now'));

    await page.initEventClick(btn);

    const modalDialog = await element(by.css('.modal-dialog'));
    expect(modalDialog.isPresent()).toBeTruthy();
  });
});
