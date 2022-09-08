const Express = require('express');

const router = Express.Router();

const ProdutosController = require("./controllers/produtos");

router.get("/produtos", ProdutosController.listarProdutos);

module.exports = router;