const express = require('express');
const router = express.Router();

const Cliente = require("./controllers/ClientesController");

router.get("/blobs/clientes", Cliente.listarClientes);
router.post("/blobs/clientes", Cliente.cadastrarCliente);

module.exports = router;