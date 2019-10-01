import { browser, by, element } from 'protractor';

import { FileRepositoryPage } from './file-repository-page.po';

describe('FileRepositoryPage', () => {
  let page: FileRepositoryPage;

  beforeEach(() => {
    page = new FileRepositoryPage();
    page.navigateToFileRepository();

    browser.sleep(4000);
  });

  it('should display FilesRepositoryLayout', () => {
    expect(page.getAppComponent('ultra-files-repository-layout').isPresent()).toBeTruthy();
  });

  it('should create new repository', async () => {
    const createBtn = element.all(by.css('ultra-create-btn')).get(0);

    page.initEventClick(createBtn);

    browser.sleep(2000);

    page.changeSelectValue('ultra-create-files-repository-modal', 2);

    const name = element(by.css('ultra-create-files-repository-modal input[type="text"]'));

    browser.sleep(2000);

    name.sendKeys('Test');

    browser.sleep(2000);

    const saveBtn = element(by.css('ultra-create-files-repository-modal button.btn-primary'));

    page.initEventClick(saveBtn);

    browser.sleep(2000);

    const repositories = await element.all(by.css('.expansion-panel'));

    expect(repositories.length > 0).toBeTruthy();
  });
});
