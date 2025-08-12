//Conexão com o banco
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

connection.connect((erro) => {
  if (erro) {
    console.error('Erro ao conectar ao banco de dados:', erro.message);
  } else {
    console.log('Conexão estabelecida com sucesso no banco de dados!');
  }
});

module.exports = connection;