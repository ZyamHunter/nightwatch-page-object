const searchCommands = {
  verifyHome() {
    // O Nightwatch usa o alias 'searchBar' para o seletor
    this.waitForElementVisible('@searchBar', 1000); // '@searchBar' é o alias gerado automaticamente

    this.pause(1000);

    return this; // para o encadeamento de comandos
  },
};

module.exports = {
  commands: [searchCommands],

  elements: {
    searchBar: {
      selector: 'div .home_login__HKO5L', // Seletor CSS para localizar o elemento da barra de pesquisa
    },
  },
};
