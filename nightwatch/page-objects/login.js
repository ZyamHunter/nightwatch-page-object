const searchCommands = {
  submitLogin(email, senha) {
    this.assert
      .elementPresent('@emailInput')
      .sendKeys('@emailInput', email)
      .assert.elementPresent('@passwordInput')
      .sendKeys('@passwordInput', [senha, browser.Keys.ENTER]);

    return this;
  },
};

module.exports = {
  commands: [searchCommands],

  elements: {
    emailInput: {
      selector: '#email',
    },
    passwordInput: {
      selector: '#password',
    },
    accessButton: {
      selector: 'button',
    },
    toastLoginStatus: {
      selector: '.Toastify__toast-body',
    },
    inputMessageError: {
      selector: '.home_errorText__xwJiK',
    },
  },
};
