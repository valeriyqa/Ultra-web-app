import { browser, by, element } from 'protractor';

import { DetailsPage } from './details-page.po';

describe('DetailsPage', () => {
  let page: DetailsPage;

  beforeEach(() => {
    page = new DetailsPage();
    page.navigateToGameInformation();

    browser.sleep(4000);
  });

  it('sholud display Details', () => {
    expect(page.getAppComponent('ultra-details').isPresent()).toBeTruthy();
  });

  it('should display categoties', async () => {
    const categories = element.all(by.css('.category-item'));

    await page.initEventClick(categories.get(1));

    expect(categories.get(0).isPresent()).toBeTruthy();
  });

  it('should add and display age ratings', async () => {
    const addButton = element(by.css('ultra-create-btn'));

    await page.initEventClick(addButton);

    browser.sleep(2000);

    const modal = element(by.css('ultra-age-ratings-modal'));

    expect(modal.isPresent()).toBeTruthy();

    const countrySelect = element(by.css('ultra-age-ratings-modal ultra-select .dropdown-select__btn'));

    await page.initEventClick(countrySelect);

    browser.sleep(1000);

    const option = element.all(by.css('ultra-age-ratings-modal ultra-select .dropdown-item')).get(1);

    await page.initEventClick(option);

    const categoryImage = element.all(by.css('.category-image')).get(0);

    await page.initEventClick(categoryImage);

    const textareas = element.all(by.css('ultra-textarea textarea'));
    textareas.get(0).sendKeys('Test');
    textareas.get(1).sendKeys('Test');

    const submit = element(by.partialButtonText('Add Rating'));

    page.initEventClick(submit);

    browser.sleep(2000);

    await browser.waitForAngular();

    const rating = await element(by.css('ultra-age-ratings .category-item'));

    expect(rating.isPresent()).toBeTruthy();
  });

  it('sholud display SystemRequirementsComponent', () => {
    expect(page.getAppComponent('ultra-system-requirements').isPresent()).toBeTruthy();
  });

  it('sholud display LanguageSupportLayout', async () => {
    expect(page.getAppComponent('ultra-system-requirements').isPresent()).toBeTruthy();

    const lenguageSelect = element(by.css('ultra-language-form ultra-select .dropdown-select__btn'));

    await page.initEventClick(lenguageSelect);

    browser.sleep(1000);

    const option = element.all(by.css('ultra-language-form ultra-select .dropdown-item')).get(1);

    await page.initEventClick(option);

    const addButton = element(by.partialButtonText('Add language'));

    await page.initEventClick(addButton);

    browser.sleep(2000);

    const item = await element(by.css('ultra-language-list ultra-language-item'));

    expect(item.isPresent()).toBeTruthy();
  });

  it('sholud display ExternalLinksLayout', async () => {
    expect(page.getAppComponent('ultra-external-links-layout').isPresent()).toBeTruthy();

    const name = await element.all(by.css('ultra-link-form input[type="text"]')).get(0);
    const url = await element.all(by.css('ultra-link-form input[type="text"]')).get(1);
    const addButton = await element(by.partialButtonText('Add link'));

    name.sendKeys('test');
    url.sendKeys('http://localhost.com');

    page.initEventClick(addButton);

    const list = await element.all(by.css('ultra-link-item'));

    expect(list.length > 0).toBeTruthy();
  });
});
