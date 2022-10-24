const express = require('express');
const router = express.Router();

const Solicitacoes = require("../controllers/solicitacoesController");

router.get("/solicitacoes/produtos", Solicitacoes.listarProdutos);
router.put("/solicitacoes/produtos", Solicitacoes.alterarProduto);
router.get("/solicitacoes/produtos/:Nome_produto", Solicitacoes.buscarProdutoDepartamento);
router.get("/solicitacoes/produtos/mes/:Data_sol", Solicitacoes.buscarProdutoMes);
router.get("/solicitacoes/funcionarios", Solicitacoes.solicitacoesFuncionario)
router.post("/solicitacoes/produtos", Solicitacoes.addProduto);
router.post("/solicitacoes/departamentos", Solicitacoes.addDepartamento);
router.get("/solicitacoes/departamentos", Solicitacoes.listarDepartamentos);
router.delete("/solicitacoes/departamentos", Solicitacoes.deletarDepartamento);
router.post("/solicitacoes/solicitacao", Solicitacoes.solicitacao);
router.get("/solicitacoes/solicitacao", Solicitacoes.vwSol);

module.exports = router;