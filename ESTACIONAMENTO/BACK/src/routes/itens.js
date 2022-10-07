const express = require('express');
const router = express.Router();

const Cliente = require("../controllers/clienteController");
const Veiculo = require("../controllers/veiculoController");
const Estacionamento = require("../controllers/estacionamentoController");

//rotas cliente
router.get("/estacionamento/clientes", Cliente.listarClientes);
router.post("/estacionamento/clientes", Cliente.addCliente);
router.put("/estacionamento/clientes", Cliente.alterarCliente);
router.delete("/estacionamento/clientes", Cliente.deletarCliente);
router.get("/estacionamento/clientes/:id_cli", Cliente.buscarCliente);

//rotas veiculo
router.get("/estacionamento/veiculo", Veiculo.listarVeiculos);
router.post("/estacionamento/veiculo", Veiculo.addVeiculo);
router.put("/estacionamento/veiculo", Veiculo.alterarVeiculo);
router.delete("/estacionamento/veiculo", Veiculo.deletarVeiculo);
router.get("/estacionamento/veiculo/:placa", Veiculo.buscarVeiculo);

//rotas estacionamento
router.post("/estacionamento/entrada", Estacionamento.);

module.exports = router;