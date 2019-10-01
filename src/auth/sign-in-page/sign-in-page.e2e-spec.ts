import { SignInPage } from './sign-in-page.po';
import { browser, Builder } from 'protractor';

describe('SignInPage', () => {
  let page: SignInPage;


  beforeAll(async () => {
    page = new SignInPage();
    await page.navigationToSignIn();
  });

  it('should display sign-in form', async () => {
    expect(page.getSignInComponent().isPresent()).toBeTruthy();
  });

  it('should filled form', async () => {
    const email = page.getEmailInput();
    const password = page.getPasswordInput();

    expect(email.isPresent()).toBeTruthy();
    expect(password.isPresent()).toBeTruthy();

    email.sendKeys(page.email);
    password.sendKeys(page.password);
    expect(email.getAttribute('value')).toEqual(page.email);
    expect(password.getAttribute('value')).toEqual(page.password);
    page.getSubmitButton().click();
  });
  it('should display a store page', async () => {
    expect(browser.getCurrentUrl()).toEqual('https://test.app.ultra.io/en/store');
  });
});
