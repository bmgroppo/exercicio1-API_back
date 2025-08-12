//HTTP
const service = require("../service/jogosService");

exports.listarTodos = (req, res) => {
  service.getAll((erro, resultado) => {
    if (erro) {
      res.status(500).json({ erro: "Erro ao buscar Jogos" });
    } else {
      res.json(resultado);
    }
  });
};
exports.buscarPorId = (req, res) => {
  const id = req.params.id;
  service.getById(id, (erro, resultado) => {
    if (erro) {
      res.status(500).json({ erro: "Erro ao buscar por ID" });
      if (resultado.length === 0) {
        res.status(404).json({ erro: "Jogos não encontrado" });
      } else {
        res.json(resultado[0]);
      }
    }
  });
};

exports.inserir = (req, res) => {
  service.post(req.body, (erro, resultado) => {
    if (erro) {
      res.status(500).json({ erro: "Erro ao inserir Jogo" });
    } else {
      res
        .status(201)
        .json({ message: "Jogo inserido com sucesso", id: resultado.insertId });
    }
  });
};
exports.atualizar = (req, res) => {
  const id = req.params.id;
  const jogos = req.body;
  service.put(id, jogos, (erro, resultado) => {
    if (erro) {
      res.status(500).json({ erro: "Erro ao atualizar jogo" });
    } else if (resultado.affectedRows === 0) {
      res.status(404).json({ erro: "Jogo não encontrado" });
    } else {
      res.json({ message: "Jogo atualizado com sucesso" });
    }
  });
};
exports.deletar = (req, res) => {
  const id = req.params.id;
  service.delete(id, (erro, resultado) => {
    if (erro) {
      res.status(500).json({ erro: "Erro ao deletar Jogo" });
    } else if (resultado.affectedRows === 0) {
      res.status(404).json({ erro: "Jogo não encontrado" });
    } else {
      res.json({ message: "Jogo deletado com sucesso" });
    }
  });
};
