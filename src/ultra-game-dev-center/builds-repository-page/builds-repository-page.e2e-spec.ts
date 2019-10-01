import { browser, by, element } from 'protractor';

import { BuildsRepositoryPage } from './builds-repository-page.po';

describe('BuildsRepositoryPage', () => {
  let page: BuildsRepositoryPage;

  beforeEach(() => {
    page = new BuildsRepositoryPage();
    page.navigateToBuildsRepository();

    browser.sleep(4000);
  });

  it('should display FilesRepositoryLayout', () => {
    expect(page.getAppComponent('ultra-builds-repository-layout').isPresent()).toBeTruthy();
  });

  it('should create builds repository', async () => {
    const createBtn = element.all(by.css('ultra-create-btn')).get(0);

    page.initEventClick(createBtn);

    browser.sleep(4000);

    const checkbox = element.all(by.css('ultra-checkbox .checkbox__label')).get(0);
    const submitBtn = element(by.partialButtonText('Create Build'));

    page.initEventClick(checkbox);
    page.initEventClick(submitBtn);

    browser.sleep(4000);

    const branchDropdown = element(by.css('ultra-branch-dropdown .dropdown-toggle'));

    page.initEventClick(branchDropdown);

    browser.sleep(2000);

    const createBranchBtn = element(by.css('.branch__create'));

    page.initEventClick(createBranchBtn);

    browser.sleep(2000);

    const input = element(by.css('ultra-branches-modal input'));
    const inputSubmit = element(by.partialButtonText('Create Branch'));

    input.sendKeys('Test');

    page.initEventClick(inputSubmit);

    const list = element(by.css('.branch__list-wrapper .tag'));

    expect(list.isPresent()).toBeTruthy();

    const trashIcon = element(by.css('.icon-trash-sm'));

    page.initEventClick(trashIcon);

    const listTwo = element(by.css('.branch__list-wrapper .tag'));

    expect(listTwo.isPresent()).toBeFalsy();
  });
});
