import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(path: string) {
    browser.ignoreSynchronization = true;
    return browser.get(path);
  }

  getCurrentUrl() {
    return browser.driver.getCurrentUrl();
  }

  getAppComponent(selector: string) {
    return element(by.css(selector));
  }

  async initEventClick(targetEle: ElementFinder) {
    await targetEle.click();
    await browser.waitForAngular();
  }

  async changeSelectValue(selector: string, optionNumber = 0) {
    const select = element(by.css(`${selector} ultra-select .dropdown-select__btn`));
    await this.initEventClick(select);
    browser.sleep(1000);

    const option = element.all(by.css(`${selector} ultra-select .dropdown-item`)).get(optionNumber);
    await this.initEventClick(option);
  }
}
