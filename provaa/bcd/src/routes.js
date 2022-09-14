const Express = require('express');

const router = Express.Router();

const clienteControllers = require("./controllers/clienteControllers");
const filmesControllers = require("./controllers/filmesControllers");

router.get("/clientes", clienteControllers.listarCliente);
router.post("/clientes", clienteControllers.cadastrarCliente);

router.get("/filmes", filmesControllers.listarFilmes);
router.post("/filmes", filmesControllers.cadastrarFilmes);


module.exports = router;