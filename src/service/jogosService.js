// regra de negócio, validar dados, aplicar calculos, evitar duplicidades

const repositorio = require('../repository/jogosRepository');
exports.getAll = (retorno) => {
    repositorio.buscarTodos(retorno)
}
exports.getById = (id, retorno) => {
    repositorio.buscarPorId(id, retorno)
}
exports.post = (jogos, retorno) => {
    repositorio.inserir(jogos, retorno)
}
exports.put = (id, jogos, retorno) => {
    repositorio.atualizar(id, jogos, retorno)
}
exports.delete = (id, retorno) => {
    repositorio.deletar(id, retorno)
}

