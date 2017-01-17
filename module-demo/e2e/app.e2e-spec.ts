import { ModuleDemoPage } from './app.po';

describe('module-demo App', function() {
  let page: ModuleDemoPage;

  beforeEach(() => {
    page = new ModuleDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
