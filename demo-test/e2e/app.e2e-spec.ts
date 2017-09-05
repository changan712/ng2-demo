import { DemoTestPage } from './app.po';

describe('demo-test App', () => {
  let page: DemoTestPage;

  beforeEach(() => {
    page = new DemoTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
