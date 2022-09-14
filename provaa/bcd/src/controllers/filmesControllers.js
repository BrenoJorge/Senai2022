const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "Locadoura"
});

function listarFilmes(req, res) {
    let query = "SELECT * FROM filmes";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarFilmes(req, res) {
    let query = `insert into filmes values(DEFAULT, '${req.body.nome}', '${req.body.genero}')`

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
    listarFilmes,
    cadastrarFilmes
}