const Express = require('express');

const router = Express.Router();

const ProdutosController = require("./controllers/produtos");

router.get("/produtos", ProdutosController.listarProdutos);
router.post("/produtos", ProdutosController.cadastrarProdutos);

module.exports = router;