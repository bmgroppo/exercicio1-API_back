//Busca no banco (comando SQL)
const db = require('../config/db');

exports.buscarTodos = (retorno) => {
    db.query('SELECT * FROM game', retorno);
};
exports.buscarPorId = (id, retorno) => {
    db.query('SELECT * FROM game WHERE id = ?', [id], retorno);
};
exports.inserir = (jogos, retorno) => {
    const { nome, tipo, ano } = jogos;
    db.query('INSERT INTO game (nome, tipo, ano) VALUES (?, ?, ?)', [nome, tipo, ano], retorno);
};
exports.atualizar = (id, jogos, retorno) => {
    const { nome, tipo, ano } = jogos;
    db.query('UPDATE game SET nome = ?, tipo = ?, ano = ? WHERE id = ?', [nome, tipo, ano, id], retorno);
};
exports.deletar = (id, retorno) => {
    db.query('DELETE FROM game WHERE id = ?', [id], retorno);
};