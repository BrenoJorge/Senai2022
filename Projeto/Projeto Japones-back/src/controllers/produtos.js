const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "loja_japa"
});

function listarProdutos(req, res) {
    let query = "SELECT * FROM produtos";

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarProdutos(req, res) {
    let query = `insert into produtos values(DEFAULT, ${req.body.data}, '${req.body.descricao}', ${req.body.valor}, '${req.body.tipo}')`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.json(req.body).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

module.exports = {
    listarProdutos,
    cadastrarProdutos
}