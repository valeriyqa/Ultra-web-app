import { browser, by, element } from 'protractor';

import { GameInformationPage } from './game-information-page.po';

describe('GameInformationPage', () => {
  let page: GameInformationPage;

  beforeEach(() => {
    page = new GameInformationPage();
    page.navigateToGameInformation();

    browser.sleep(4000);
  });

  it('sholud display GameInformationComponent', () => {
    expect(page.getAppComponent('ultra-game-information').isPresent()).toBeTruthy();
  });

  it('should containe form', async () => {
    const gameName = element(by.css('ultra-input[label="Game Name"] input[type="text"]'));
    gameName.clear();
    gameName.sendKeys('Test');
    expect(gameName.getAttribute('value')).toEqual('Test');

    const ultraReleaseDate = element(by.css('ultra-datepicker[label="Ultra release date"] input[ngbdatepicker]'));
    ultraReleaseDate.clear();
    ultraReleaseDate.sendKeys('2018/09/27');
    expect(ultraReleaseDate.getAttribute('value')).toEqual('2018/09/27');

    const releaseCheckbox = element.all(by.css('ultra-checkbox[size="sm"] .checkbox__label')).get(0);
    await page.initEventClick(releaseCheckbox);

    const officialReleaseDate = element(by.css('ultra-datepicker[label="Official release date"] input[ngbdatepicker]'));
    officialReleaseDate.clear();
    officialReleaseDate.sendKeys('2018/09/27');
    expect(officialReleaseDate.getAttribute('value')).toEqual('2018/09/27');

    const publisherName = element(by.css('ultra-input[label="Publisher Name"] input[type="text"]'));
    const developerName = element(by.css('ultra-input[label="Developer Name"] input[type="text"]'));
    developerName.clear();
    developerName.sendKeys('Test');
    expect(developerName.getAttribute('value')).toEqual('Test');

    const primaryGenres = element(by.css('ultra-radio'));
    const secondaryGenres = element(by.css('ultra-checkbox'));
    const tags = element(by.css('ultra-tags-input'));

    expect(gameName.isPresent()).toBeTruthy();
    expect(ultraReleaseDate.isPresent()).toBeTruthy();
    expect(officialReleaseDate.isPresent()).toBeTruthy();
    expect(publisherName.isPresent()).toBeTruthy();
    expect(developerName.isPresent()).toBeTruthy();
    expect(primaryGenres.isPresent()).toBeTruthy();
    expect(secondaryGenres.isPresent()).toBeTruthy();
    expect(tags.isPresent()).toBeTruthy();
  });
});
