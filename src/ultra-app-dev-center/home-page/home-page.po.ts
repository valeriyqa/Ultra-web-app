import { promise } from 'protractor';

import { AppPage } from '../../app.po';

export class HomePage extends AppPage {
  navigateToHome(): promise.Promise<any> {
    return this.navigateTo('/');
  }
}
