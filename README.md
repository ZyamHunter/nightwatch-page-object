# Nightwatch.js - Testes E2E (End-to-End)

Nightwatch.js é uma poderosa ferramenta de automação de testes para aplicações web, baseada em Node.js. Com o Nightwatch, você pode escrever testes automatizados para garantir que suas aplicações web funcionem corretamente e com qualidade, validando o comportamento do sistema do início ao fim.

Este README tem como objetivo fornecer uma introdução abrangente ao Nightwatch, como configurá-lo e usá-lo para criar testes end-to-end (E2E).

## Índice

- [O que é Nightwatch?](#o-que-é-nightwatch)
- [Instalação](#instalação)
- [Configuração Inicial](#configuração-inicial)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rodando os Testes](#rodando-os-testes)
- [Dicas e Boas Práticas](#dicas-e-boas-práticas)
- [Documentação Oficial](#documentação-oficial)

## O que é Nightwatch?

Nightwatch.js é uma ferramenta de automação de testes end-to-end para aplicações web, projetada para ser simples, eficiente e poderosa. Usando WebDriver e Selenium, o Nightwatch permite que você escreva testes utilizando JavaScript de forma simples e intuitiva.

### Principais Características:

- **Sintaxe Simples e Fluente**: Nightwatch permite escrever testes de forma legível e fácil de manter.
- **Testes Paralelos**: Suporta a execução de testes em paralelo, o que melhora a performance dos testes.
- **Integrado com CI/CD**: Pode ser integrado facilmente em pipelines de CI/CD.
- **Page Objects**: Facilita a organização de testes com o padrão Page Object, que separa a lógica de interação com a página.

## Instalação

Primeiro, certifique-se de ter o Node.js instalado no seu sistema.

Para instalar o Nightwatch e suas dependências, basta executar o seguinte comando:

> npm init nightwatch

E faça suas escolhas de acordo com o que deseja testar

## Configuração Inicial

No Nightwatch, a configuração pode ser feita em um arquivo nightwatch.conf.js ou diretamente no código, mas é recomendado usar um arquivo separado para manter a organização

## Estrutura do Projeto

Aqui está uma estrutura de diretórios recomendada para organizar seus testes e recursos:

/meu-projeto
/node_modules # Dependências do projeto
/tests # Testes automatizados
/loginTest.js # Exemplo de teste de login
/homeTest.js # Exemplo de teste da página inicial
/tests_output # Relatórios dos testes
/resources # Localizadores das telas
/data # Credenciais de usuários
.prettierrc # Definições de lint do prettier
package.json # Definições do projeto

## Rodando os Testes

Para rodar seus testes, basta executar o seguinte comando:

- npm run login
- npm run home

## Dicas e Boas Práticas

- Utilize Page Objects para melhorar a organização e reutilização do código.
- Escreva testes independentes: Cada teste deve ser capaz de rodar isoladamente.
- Evite usar pause excessivamente: Prefira usar comandos como waitForElementVisible para garantir que os elementos estejam prontos antes de interagir.
- Use asserts para validar o comportamento esperado da aplicação.

## Documentação Oficial

Para mais informações sobre o Nightwatch, você pode consultar a documentação oficial do Nightwatch. [aqui](https://nightwatchjs.org/)
