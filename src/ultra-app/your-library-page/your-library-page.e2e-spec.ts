import { browser } from 'protractor';

import { YourLibraryPage } from './your-library-page.po';

describe('YourLibraryPage', () => {
  let page: YourLibraryPage;

  beforeEach(() => {
    page = new YourLibraryPage();
    page.navigateToYourLibrary();

    browser.sleep(4000);
  });

  it('should display YourLibraryNoneGames', () => {
    expect(page.getYourLibraryNoneGames().getText()).toContain('No games in your library yet ?');
  });

  it('should display GameDetailPreviewComponent', async () => {
    expect(page.getAppComponent('ultra-game-detail-preview').isPresent()).toBeTruthy();
  });

  it('should display GameDetailAboutComponent', () => {
    expect(page.getAppComponent('ultra-game-detail-about').isPresent()).toBeTruthy();
  });

  it('should display GameDetailDetailComponent', () => {
    expect(page.getAppComponent('ultra-game-detail-detail').isPresent()).toBeTruthy();
  });

  it('should display YourLibraryLastPlayed', () => {
    expect(page.getAppComponent('ultra-your-library-last-played').isPresent()).toBeTruthy();
  });

  it('should display YourLibrarySuggestionsFromYourLibraryComponent', () => {
    expect(page.getAppComponent('ultra-your-library-suggestions-from-your-library').isPresent()).toBeTruthy();
  });

  it('should display YourLibraryGamesLayout', () => {
    expect(page.getAppComponent('ultra-your-library-games-layout').isPresent()).toBeTruthy();
  });
});
