const Estacionamento = require('../models/modelEstacionamento');
const con = require('../models/estacionamentoDAO');

const addEntrada = (req, res) => {
    con.query(Estacionamento.add_entrada(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}


module.exports = addEntrada
