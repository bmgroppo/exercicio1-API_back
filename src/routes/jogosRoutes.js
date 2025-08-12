// Definição de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controller/jogosController');

router.get('/jogos', controller.listarTodos);
router.get('/jogos/:id', controller.buscarPorId);
router.post('/jogos', controller.inserir);
router.put('/jogos/:id', controller.atualizar);
router.delete('/jogos/:id', controller.deletar);

module.exports = router;