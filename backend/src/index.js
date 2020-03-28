const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/*
    metodos HTTP:
    get: buscar informacao do backend
    post: criar informacao no backend
    put: alterando informacao no backend
    delete: deletar informacao no backend
*/
/**
 * tipos de parametros
 * 
 * Query params: parametros nomeados enviados na rota apos "?" (filtros, paginacao)
 * Route params: parametros utilizados para identificar recursos
 * Request Body: corpo da requisicao, utilizado para criar ou alterar recursos
 */
/** 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, couchDB, etc;    
 */
/**
 * Driver: SELECT * from users
 * Query builder: table('users').select('*').where()
 */


app.listen(3333);