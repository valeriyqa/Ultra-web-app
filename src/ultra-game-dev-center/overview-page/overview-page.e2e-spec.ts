import { browser, by, element } from 'protractor';

import { OverviewPage } from './overview-page.po';

describe('OverviewPage', () => {
  let page: OverviewPage;

  beforeEach(() => {
    page = new OverviewPage();
    page.navigateToOverview();

    browser.sleep(4000);
  });

  it('should display GameInfoOverview', () => {
    expect(page.getAppComponent('ultra-game-info-overview').isPresent()).toBeTruthy();
  });

  it('should display filling indicator', async () => {
    const indicator = element(by.css('ultra-fill-indicator'));

    expect(indicator.isPresent()).toBeTruthy();
  });

  it('should display save modal', async () => {
    const saveButton = await element(by.buttonText('Save Changes'));

    expect(saveButton.isPresent()).toBeTruthy();

    await page.initEventClick(saveButton);

    const modal = await element(by.css('ultra-game-alert-modal'));
    const button = await element(by.partialButtonText('Save Changes'));

    expect(modal.isPresent()).toBeTruthy();
    expect(button.isPresent()).toBeTruthy();
  });

  it('should display review changes modal', async () => {
    const reviewChangesButton = await element(by.buttonText('Review Changes'));

    expect(reviewChangesButton.isPresent()).toBeTruthy();

    await page.initEventClick(reviewChangesButton);

    const modal = await element(by.css('ultra-game-alert-modal'));
    const button = await element(by.partialButtonText('View all'));

    expect(modal.isPresent()).toBeTruthy();
    expect(button.isPresent()).toBeTruthy();
  });
});
