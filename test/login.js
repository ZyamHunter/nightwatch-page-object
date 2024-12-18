const fs = require('fs');
const path = require('path');

// const resourcesLogin = require('../resources/login');

describe('The Login Page', function () {
  let massa;

  before(function (browser) {
    const userData = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../data', 'user.json'), 'utf8'),
    );
    massa = userData;
  });

  beforeEach(function (browser) {
    browser.navigateTo('/');
  });

  afterEach(function (browser) {
    // browser.pause(2000);
  });

  it('Login genérico', function (browser) {
    const login = browser.page.login();

    login
      .submitLogin('user@teste.com', 'Teste@123!')
      .waitForElementVisible(
        '@toastLoginStatus',
        'Login realizado com sucesso!',
      )
      .getText('@toastLoginStatus', function (result) {
        this.assert.strictEqual(result.status, 0);
        this.assert.equal(result.value, 'Login realizado com sucesso!');
      });
    browser.assert.urlContains('/dashboard');
  });

  it('Login avançado', function (browser) {
    const login = browser.page.login();
    login
      .submitLogin('user@teste.com', 'Teste@123!')
      .waitForElementVisible('@toastLoginStatus')
      .assert.containsText('@toastLoginStatus', 'Login realizado com sucesso!');
  });

  it('Login com sucesso com massa definida em constante', function (browser) {
    const user = {
      email: 'user@teste.com',
      senha: 'Teste@123!',
    };

    browser.page
      .login()
      .submitLogin(user.email, user.senha)
      .waitForElementVisible('@toastLoginStatus')
      .assert.containsText('@toastLoginStatus', 'Login realizado com sucesso!');
  });

  it('Login com sucesso usando massa da fixture', function (browser) {
    const userData = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../data', 'user.json'), 'utf8'),
    );
    user = userData;

    browser.page
      .login()
      .submitLogin(user.email, user.senha)
      .waitForElementVisible('@toastLoginStatus')
      .assert.containsText('@toastLoginStatus', 'Login realizado com sucesso!');
  });

  it('Login com sucesso usando massa da fixture no before', function (browser) {
    browser.page
      .login()
      .submitLogin(massa.email, massa.senha)
      .waitForElementVisible('@toastLoginStatus')
      .assert.containsText('@toastLoginStatus', 'Login realizado com sucesso!');
  });

  it('Login com email incorreto', function (browser) {
    browser.page
      .login()
      .submitLogin('email_errado@teste.com', massa.senha)
      .waitForElementVisible('@toastLoginStatus')
      .assert.containsText(
        '@toastLoginStatus',
        'Erro ao acessar, verifique suas credenciais de acesso!',
      );
  });

  it('Login com senha incorreta', function (browser) {
    browser.page
      .login()
      .submitLogin(massa.email, 'SenhaErrada123!')
      .waitForElementVisible('@toastLoginStatus')
      .assert.containsText(
        '@toastLoginStatus',
        'Erro ao acessar, verifique suas credenciais de acesso!',
      );
  });

  it('Login com email e senha incorretos', function (browser) {
    browser.page
      .login()
      .submitLogin('email_errado@teste.com', 'SenhaErrada123!')
      .waitForElementVisible('@toastLoginStatus')
      .assert.containsText(
        '@toastLoginStatus',
        'Erro ao acessar, verifique suas credenciais de acesso!',
      );
  });

  it('Login com campo de email inválido', function (browser) {
    browser.page
      .login()
      .submitLogin('email_errado.teste.com', 'SenhaErrada123!')
      .waitForElementVisible('@inputMessageError')
      .assert.containsText(
        '@inputMessageError',
        'Por favor, insira um e-mail válido.',
      )
      .waitForElementVisible('@toastLoginStatus')
      .assert.containsText(
        '@toastLoginStatus',
        'Preencha os campos corretamente!',
      );
  });

  after(function (browser) {
    // browser.end();
  });
});
