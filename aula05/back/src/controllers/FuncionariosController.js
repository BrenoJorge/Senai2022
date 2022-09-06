const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "lojinha"
});

function listarfuncionarios(req, res) {
    let query = "SELECT * FROM funcionarios";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listafuncionario(req, res) {
    let query = `SELECT * FROM funcionarios WHERE cod = '${req.params.cod}'`;
    
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};

function cadastrarfuncionario(req, res) {
    
    let query = `INSERT INTO funcionarios VALUES (DEFAULT, '${req.body.matricula}', '${req.body.nome}', '${req.body.cargo}', ${req.body.salario}, '${req.body.cpf}')`;
    console.log(query)
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluirfuncionario(req, res) {
    let query = `DELETE FROM funcionarios WHERE matricula = '${req.body.matricula}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editarfuncionario(req, res){
    let query = `UPDATE funcionarios SET matricula = '${req.body.matricula}', nome = '${req.body.nome}', cargo = '${req.body.cargo}', salario = ${req.body.salario}, cpf = '${req.body.cpf}' WHERE id = '${req.body.id}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarfuncionarios,
    listafuncionario,
    cadastrarfuncionario,
    excluirfuncionario,
    editarfuncionario
}