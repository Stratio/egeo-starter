import { EgeoStarterPage } from './app.po';

describe('egeo-starter App', () => {
  let page: EgeoStarterPage;

  beforeEach(() => {
    page = new EgeoStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
