import { SignUpPage } from './sign-up-page.po';

describe('SignUpPage', () => {
  let page: SignUpPage;

  beforeEach(async () => {
    page = new SignUpPage();

    await page.navigateToSignUp();
  });

  it('should display sign-up form', async () => {
    expect(page.getSignUpForm().isPresent()).toBeTruthy();
  });

  it('should filled form', () => {
    const username = page.getUsernameField();
    const email = page.getEmailField();
    const confirmEmail = page.getConfirmEmailField();
    const password = page.getPasswordField();
    const confirmPassword = page.getConfirmPasswordField();

    expect(username.isPresent()).toBeTruthy();
    expect(email.isPresent()).toBeTruthy();
    expect(confirmEmail.isPresent()).toBeTruthy();
    expect(password.isPresent()).toBeTruthy();
    expect(confirmPassword.isPresent()).toBeTruthy();

    username.sendKeys('Username');
    email.sendKeys(page.email);
    confirmEmail.sendKeys(page.email);
    password.sendKeys(page.password);
    confirmPassword.sendKeys(page.password);

    expect(username.getAttribute('value')).toEqual('Username');
    expect(email.getAttribute('value')).toEqual(page.email);
    expect(confirmEmail.getAttribute('value')).toEqual(page.email);
    expect(password.getAttribute('value')).toEqual(page.password);
    expect(confirmPassword.getAttribute('value')).toEqual(page.password);
  });
});
