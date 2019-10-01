import { by, element, ElementFinder, promise } from 'protractor';

import { AppPage } from '../../app.po';

export class YourLibraryPage extends AppPage {
  navigateToYourLibrary(): promise.Promise<any> {
    return this.navigateTo('/your-library');
  }

  getYourLibraryNoneGames(): ElementFinder {
    return element(by.tagName('ultra-your-library-none-games'));
  }
}
