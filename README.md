# API Express Para Cadastro de Usuários

Está API possui a funcionalidade de cadastrar usuário em um banco de dados MongoDB, além de possibilitar a edição e remoção dos usuários.

## Como Executar

Clone este repositório e execute o comando **cd cadastro-usuarios-express**. Em seguida execute com o node ou nodemon o server.js. A API irá rodar em http://localhost:8080;

Vá em **src/config/connectDB.js** substitua o valor da constante "url" pela url do seu banco de dados MongoDB ou pela sua variável de ambiente.

## Rotas

A API possui as seguintes rotas: 

### GET:

**/usuarios** : lista todos os usuários cadastrados no banco;

**/usuarios/id** : retorna o usuário para o id informado (id é a chave "_id" gerada automaticamente pelo MongoDB);

### POST:

**/usuarios** : cadastra um usuário no banco de dados com as informações enviadas pelo body da requisição, sendo que no body é obrigatorio os dados: <br>
{
    nomeCompleto: tipo String, <br>
    dataNascimento: tipo Date, <br>
    email: tipo String, <br>
    senha: tipo String <br>
} 

### PUT:

**/usuarios/id** : atualiza as informações do usuário com o id informado, com as informações enviadas pelo body da requisição.

### DELETE

**/usuarios/id** : deleta um usuário para o id informado.
