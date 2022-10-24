const Cliente = require('../models/Cliente');
const con = require('../dao/dbblobs');
const multer = require('multer');
const upload = multer().single('foto')
const fs = require('fs');

const cadastrarCliente = async (req, res) => {
    upload(req, res, function (err) {
        if (err)
            res.status(500).json({ error: 1, payload: err }).end();
        else {
            let string = Cliente.toCreate(req.body, req.file);
            con.query(string, (err, result) => {
                if (err == null) {
                    //res.status(201).json(dados).end();
                    res.redirect('http://127.0.0.1:5500/front/Clientes.html');
                } else {
                    res.status(500).json(err).end();
                }
            });
        }
    });
}

const listarClientes = (req, res) => {
    let string = Cliente.toReadAll();
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(Cliente.toAscii(result)).end();
        }
    });
}

const excluirCliente = (req, res) => {
    let string = Cliente.toDel(req.body);
    con.query(string, (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    listarClientes,
    cadastrarCliente,
    excluirCliente
}