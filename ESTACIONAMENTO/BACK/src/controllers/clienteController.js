const Cliente = require('../models/modelCliente');
const con = require('../models/estacionamentoDAO');

//CRUD Clientes
const listarClientes = (req, res) => {
    con.query(Cliente.vw_cliente(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            if (err.sqlState == 23000)//Se o ni já está cadastrado
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const addCliente = (req, res) => {
    con.query(Cliente.add_cliente(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const alterarCliente = (req, res) => {
    con.query(Cliente.alterar_cliente(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const deletarCliente = (req, res) => {
    con.query(Cliente.deletar_cliente(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const buscarCliente = (req, res) => {
    con.query(Cliente.buscar_cliente(req.params), (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarClientes,
    addCliente,
    alterarCliente,
    deletarCliente,
    buscarCliente
}