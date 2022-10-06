const express = require('express');
const router = express.Router();

const Cliente = require("../controllers/clienteController");

//rotas cliente
router.get("/estacionamento/clientes", Cliente.listarClientes);
router.post("/estacionamento/clientes", Cliente.addCliente);
router.put("/estacionamento/clientes", Cliente.alterarCliente);
router.delete("/estacionamento/clientes", Cliente.deletarCliente);
router.get("/estacionamento/clientes/:id_cli", Cliente.buscarCliente);

module.exports = router;