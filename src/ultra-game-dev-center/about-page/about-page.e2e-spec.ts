import { browser, by, element } from 'protractor';

import { AboutPage } from './about.page.po';
import { SignInPage } from '../../auth/sign-in-page/sign-in-page.po';

it('should login', () => {
  const signInPage = new SignInPage();
  const page = new AboutPage();
  signInPage.signIn();
  browser.sleep(2000);

  expect(page.getCurrentUrl()).toContain('/home');
});

describe('AboutPage', () => {
  let page: AboutPage;

  beforeEach(() => {
    page = new AboutPage();
    page.navigateToGameInformation();

    browser.sleep(4000);
  });

  it('should display StoreDetailsAbout', () => {
    expect(page.getAppComponent('ultra-store-details-about').isPresent()).toBeTruthy();
  });

  it('should display form fields', async () => {
    const textareas = element.all(by.css('ultra-textarea textarea'));
    const tagline = textareas.get(0);
    const description = textareas.get(1);

    const taglineValue = await tagline.getAttribute('value');
    const descriptionValue = await description.getAttribute('value');

    tagline.clear();
    tagline.sendKeys(taglineValue);

    description.clear();
    description.sendKeys(descriptionValue);

    expect(tagline.isPresent()).toBeTruthy();
    expect(description.isPresent()).toBeTruthy();
  });

  it('should display MediaSlots', () => {
    expect(page.getAppComponent('ultra-media-slots').isPresent()).toBeTruthy();
  });
});
