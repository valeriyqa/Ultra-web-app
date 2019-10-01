import { promise } from 'protractor';

import { AppPage } from '../../app.po';

export class GameDetailPage extends AppPage {
  navigateToGame(): promise.Promise<any> {
    return this.navigateTo('/store/games/dragon_ball_fighterz/5c587e1c8a549c000a2c0f43');
  }
}
