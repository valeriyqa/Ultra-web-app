import { browser, by, element, ElementFinder, promise, ElementArrayFinder, $$ } from 'protractor';

export class SignUpPage {
  email = 'kivowyffa-3776@yopmail.com';
  password = 'kivowyffa-3776@yopmail.comA';

  navigateToSignUp(): promise.Promise<any> {
    return browser.get('/auth/signup/step1');
  }

  getSignUpForm(): ElementFinder {
    return element(by.tagName('ultra-sign-up'));
  }

  getUsernameField(): ElementFinder {
    return this.getTextField().get(0);
  }

  getEmailField(): ElementFinder {
    return this.getTextField().get(1);
  }

  getConfirmEmailField(): ElementFinder {
    return this.getTextField().get(2);
  }

  getPasswordField(): ElementFinder {
    return this.getPasswordTypeField().get(0);
  }

  getConfirmPasswordField(): ElementFinder {
    return this.getPasswordTypeField().get(1);
  }

  private getTextField(): ElementArrayFinder {
    return $$('input[type="text"]');
  }

  private getPasswordTypeField(): ElementArrayFinder {
    return $$('input[type="password"]');
  }
}
