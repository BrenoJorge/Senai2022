const Veiculo = require('../models/modelVeiculo');
const con = require('../models/estacionamentoDAO');

//CRUD veiculos
const listarVeiculos = (req, res) => {
    con.query(Veiculo.listar_veiculo(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const addVeiculo = (req, res) => {
    con.query(Veiculo.add_veiculo(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const alterarVeiculo = (req, res) => {
    con.query(Veiculo.alterar_veiculo(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const deletarVeiculo = (req, res) => {
    con.query(Veiculo.deletar_veiculo(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const buscarVeiculo = (req, res) => {
    con.query(Veiculo.buscar_veiculo(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarVeiculos,
    addVeiculo,
    alterarVeiculo,
    deletarVeiculo,
    buscarVeiculo
}