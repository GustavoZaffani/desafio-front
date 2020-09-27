# DesafioSeniorFront

O projeto foi desenvolvido utilizado o Angular CLI, na versão 10.1.3

Para rodar o projeto, basta clonar o repositório (ou fazer download), e abrir na IDE desejada.
Feito isso, basta rodar o comando `npm install` para realizar o download de todas as bibliotecas utilizadas no projeto.
Ao finalizar o download de todas as dependências, pasta executar o comando `ng serve`. Assim que finalizar, o sistema estará iniciado na porta 4200.

Dentro da pasta `app` contém todos os fontes do sistema, como por exemplo:

* framework: contém alguns recursos que serão utilizados em todo o projeto, como diretivas, constantes e classes úteis.
  Foi criado duas directivas, ambas para formatações de campo numérico. Sendo uma delas apenas para números inteiros, e a outra para números com até 3 casas decimais.
* geral: contém os componentes padrão do sistema, como por exemplo os botões de "Novo", "Editar", "Excluir", "Voltar", e outros componentes base.
* home: contém os arquivos do componente da tela inicial do sistema, onde basicamente possui uma imagem centralizada no meio da tela;
* item: contém os arquivos do componente do item, tanto o componente de listar, quando o componente do formulário. Basicamente todas as principais funcionalidades estão dentro desta pasta.

Os demais arquivos do projeto são os arquivos base que o Angular cria ao iniciar um projeto novo.

As duas principais classes do sistema são: 
  * ItemFormComponent: contém todas as regras estipuladas para o formulário, como validações de campos e outros tratamentos. Nesse projeto foi trabalho com ReactiveForms para o desenvolvimento de validação do formulário.
  * ItemListComponent: contém as functions rensponsáveis pela criação da listagem dos produtos na tabela;
  * ItemService: contém todo o CRUD do projeto, como "save", "delete", "findAll" e "findOne". Todas estas functions utilizam Promises para trabalharem de forma assíncrona. 
  Obs.: Caso fosse consumido uma API, a classe ItemService basicamente enviaria o objeto da rotina, e aguardaria o retorno do servidor.
  
Todas as propostas estipuladas no escopo do desafio, foram trabalhadas nesse projeto.
