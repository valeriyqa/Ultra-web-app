import { promise } from 'protractor';

import { AppPage } from '../../app.po';

export class RatingsPage extends AppPage {
  navigateToRatings(): promise.Promise<any> {
    return this.navigateTo('/game/the_witcher®_3:_wild_hunt/5c587b5a8a549c000a2c0cc6/store_details/ratings_&_awards');
  }
}
