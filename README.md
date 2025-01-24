# Cypress Automation Project

Este projeto utiliza **Cypress** para testes automatizados de **API** e **Frontend** com GitHub Actions para CI/CD. Ele foi configurado para testar um site de exemplo e simular vários cenários de usuários, tanto para o login quanto para o cadastro, além de realizar testes de API (POST, PUT, DELETE, GET) no endpoint de usuários.

## Tecnologias e Plugins Utilizados

- **Cypress**: Ferramenta de testes E2E (End-to-End).
- **Cypress API Plugin**: Para realizar testes de APIs.
- **Faker Plugin**: Para gerar dados fictícios (como emails e nomes) automaticamente nos testes.
- **Page Objects**: Utilizado para organizar os testes de UI em páginas reutilizáveis.

## Instruções de Configuração

### Clonando o Repositório

 * Clone o repositório em seu ambiente local:

git clone https://github.com/seu-usuario/seu-repositorio.git

cd seu-repositorio

### Instalando as Dependencias

npm install

### Configuração do Cypress

* Para rodar os testes localmente, você precisará configurar o Cypress em seu ambiente.

### CI/CD com GitHub Actions

O projeto já está configurado para rodar os testes automaticamente sempre que houver um push ou pull request na branch main. Abaixo está o fluxo básico de CI/CD:

GitHub Actions está configurado para rodar os testes no ambiente Ubuntu.
A configuração do CI/CD inclui o cache do Cypress para evitar o download repetido do binário, o que otimiza o tempo de execução.

* Caso precise alterar ou adicionar algo à configuração, acesse a pasta .github/workflows onde os arquivos de configuração do GitHub Actions estão localizados.

### Como Executar os Testes

Para executar os testes localmente com Cypress, basta rodar o comando:

* npx cypress open

Este comando irá abrir a interface gráfica do Cypress, onde você pode selecionar os testes que deseja executar.

Se você quiser rodar os testes em modo headless (sem a interface gráfica), use o seguinte comando:

* npx cypress run

### Testes de API

Os testes de API foram realizados utilizando o plugin API do Cypress, testando o endpoint de usuários no site Serverest. As operações realizadas foram:

POST: Criação de novos usuários.

PUT: Atualização de usuários existentes.

DELETE: Exclusão de usuários.

GET: Consulta de usuários.

Cada teste foi configurado para testar cenários válidos e inválidos.

### Testes Frontend

Os testes de frontend foram feitos no site Serverest Frontend, focando em cenários de login e cadastro de usuários, com variações de dados válidos e inválidos. 

Foram testados:

Login: Cenários de login com sucesso e falha.

Cadastro: Cenários de registro de usuário com dados 
válidos e inválidos.

### Page Objects

Foi utilizado o padrão Page Objects para organizar e manter os testes E2E de forma modular e reutilizável. Cada página do site tem uma classe correspondente, que contém métodos para interagir com os elementos e realizar as ações necessárias nos testes.

### Observações

CI/CD Falhando:

A execução do CI/CD no GitHub Actions está falhando devido aos testes de API que criam usuários. Como cada criação de usuário requer um nome único, isso gera uma falha de duplicação de dados em execuções subsequentes. Essa questão pode ser corrigida com uma abordagem de limpeza (como a exclusão de usuários após os testes) ou a geração de dados dinâmicos para o nome de usuário.
Os testes de criação de usuários requerem um processo dinâmico para garantir que o nome do usuário seja sempre único.