const Estacionamento = require('../models/modelEstacionamento');
const con = require('../models/estacionamentoDAO');

function listarEntradas(req, res) {
    con.query(Estacionamento.listar_entrada, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listarEntrada(req, res) {
    con.query(Estacionamento.buscar_entrda(req.params), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarEntrada(req, res) {
    con.query(Estacionamento.inserir_entrada(req.body), (err, result) => {
        if(err == null) {
            res.json(req.body).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function editarEntrada(req, res){
    con.query(Estacionamento.update_entrada(req.body), (err, result) => {
        if(err == null) {
            res.json(req.body).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
}

function excluirEntrada(req, res) {
    con.query(Estacionamento.deletar_entrada(req.body), (err, result) => {
        if(err == null) {
            res.json(req.body).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

module.exports = {
    listarEntradas,
    cadastrarEntrada,
    editarEntrada,
    listarEntrada,
    excluirEntrada
}
