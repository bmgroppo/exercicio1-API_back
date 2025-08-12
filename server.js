const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const routes = require('./src/routes/jogosRoutes');
const app = express();

app.use(express.json());
app.use(cors({ 
  origin: '*',
methods: ['GET', 'POST', 'PUT', 'DELETE'],
allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(routes);
  
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`)});