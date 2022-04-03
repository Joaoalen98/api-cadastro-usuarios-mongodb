# API Express Para Cadastro de Usuários

Está API possui a funcionalidade de cadastrar usuário em um banco de dados MongoDB, além de possibilitar a edição e remoção dos usuários.

## Como Executar

Clone este repositório e execute o comando **cd cadastro-usuarios-express**. Em seguida execute com o node ou nodemon o server.js.

## Rotas

A API possui as seguintes rotas: 

### GET:

**/usuarios** : lista todos os usuários cadastrados no banco;

**/usuarios/id** : retorna o usuário para o id informado (id é a chave "_id" gerada automaticamente pelo MongoDB);

### POST:

**/usuarios** : cadastra um usuário no banco de dados com as informações enviadas pelo body da requisição, sendo que no body é obrigatorio os dados:
{
    nomeCompleto: tipo String,
    dataNascimento: tipo Date,
    email: tipo String,
    senha: tipo String
} 

### PUT:

**/usuarios/id** : atualiza as informações do usuário com o id informado, com as informações enviadas pelo body da requisição.

### DELETE

**/usuarios/id** : deleta um usuário para o id informado.

## OBS

As senhas não possuem Hash ou criptografia.


