const express = require('express');
const router = express.Router();

const Cliente = require("../controllers/clienteController");
const Veiculo = require("../controllers/veiculoController");
const Estacionamento = require("../controllers/estacionamentoController");
const Vagas = require("../controllers/vagasController");

//rotas cliente
router.get("/estacionamento/clientes", Cliente.listarClientes);
router.get("/estacionamento/clientes/:id", Cliente.buscarCliente);
router.post("/estacionamento/clientes", Cliente.addCliente);
router.put("/estacionamento/clientes", Cliente.alterarCliente);
router.delete("/estacionamento/clientes", Cliente.deletarCliente);

//rotas veiculo
router.get("/estacionamento/veiculo", Veiculo.listarVeiculos);
router.get("/estacionamento/veiculo/:placa", Veiculo.buscarVeiculo);
router.post("/estacionamento/veiculo", Veiculo.addVeiculo);
router.put("/estacionamento/veiculo", Veiculo.alterarVeiculo);
router.delete("/estacionamento/veiculo", Veiculo.deletarVeiculo);

//rotas estacionamento
router.get("/estacionamento/entrada", Estacionamento.listarEntradas);
router.get("/estacionamento/entrada/:id_vaga", Estacionamento.listarEntradas);
router.post("/estacionamento/entrada", Estacionamento.cadastrarEntrada);
router.put("/estacionamento/entrada", Estacionamento.editarEntrada);
router.delete("/estacionamento/entrada", Estacionamento.excluirEntrada);

//rotas vagas
router.get("/vagas/vagas", Vagas.listarVagas);

module.exports = router;