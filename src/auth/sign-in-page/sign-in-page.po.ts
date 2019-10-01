import { browser, by, element, ElementFinder, promise } from 'protractor';

export class SignInPage {
  email = 'parkhval@gmail.com';
  password = '12qw!@QW';

  navigationToSignIn(): promise.Promise<any> {
    return browser.get('/auth/login');
  }

  getSignInComponent(): ElementFinder {
    return element(by.tagName('ultra-sign-in'));
  }

  getEmailInput(): ElementFinder {
    return element(by.css('input[type="text"]'));
  }

  getPasswordInput(): ElementFinder {
    return element(by.css('input[type="password"]'));
  }

  getSubmitButton(): ElementFinder {
    return element(by.css('button.btn-primary'));
  }

  async signIn(): promise.Promise<any> {
    await this.navigationToSignIn();
    const email = this.getEmailInput();
    const password = this.getPasswordInput();
    const button = this.getSubmitButton();

    email.sendKeys(this.email);
    password.sendKeys(this.password);

    return button.click();
  }
}
