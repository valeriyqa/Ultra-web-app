import { promise } from 'protractor';

import { AppPage } from '../../app.po';

export class StorePage extends AppPage {
  navigateToStore(): promise.Promise<any> {
    return this.navigateTo('/store');
  }
}
