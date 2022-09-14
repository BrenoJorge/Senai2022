const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "Locadoura"
});

function listarCliente(req, res) {
    let query = "SELECT * FROM clientes";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarCliente(req, res) {
    let query = `insert into clientes values(${req.body.codigo}, '${req.body.nome}', '${req.body.endereco}')`

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(req.body).status(200).end();
        }else if(err.sqlMessage == "Duplicate entry '3836' for key 'PRIMARY'"){
            res.json("CODIGO DUPLICADO").status(400).end();
        } else {
            res.json(err).status(400).end();
        }
    })
}

module.exports = {
    listarCliente,
    cadastrarCliente
}