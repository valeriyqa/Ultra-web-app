import { browser, by, element } from 'protractor';

import { HomePage } from './home-page.po';
import { SignInPage } from '../../auth/sign-in-page/sign-in-page.po';

it('should login', () => {
  const signInPage = new SignInPage();
  const page = new HomePage();
  signInPage.signIn();
  browser.sleep(2000);

  expect(page.getCurrentUrl()).toContain('/app-dev');
});
