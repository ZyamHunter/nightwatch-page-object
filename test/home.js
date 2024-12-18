describe('Home', () => {
  beforeEach(function (browser) {
    browser.navigateTo('/');
  });

  it('Acessar Home', () => {
    browser.page.home().verifyHome();
  });
});
