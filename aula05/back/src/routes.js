const Express = require('express');

const router = Express.Router();

const ProdutosController = require("./controllers/ProdutosController");
const FuncionariosController = require("./controllers/FuncionariosController");

//produtos
router.get("/produtos", ProdutosController.listarProdutos);
router.get("/produto/:cod", ProdutosController.listaProduto);
router.post("/produtos", ProdutosController.cadastrarProduto);
router.delete("/produto", ProdutosController.excluirProduto);
router.put("/produto", ProdutosController.editarProduto);

//funcionarios
router.get("/funcionarios", FuncionariosController.listarfuncionarios);
router.get("/funcionario/:cod", FuncionariosController.listafuncionario);
router.post("/funcionario", FuncionariosController.cadastrarfuncionario);
router.delete("/funcionario", FuncionariosController.excluirfuncionario);
router.put("/funcionarios", FuncionariosController.editarfuncionario);

module.exports = router;