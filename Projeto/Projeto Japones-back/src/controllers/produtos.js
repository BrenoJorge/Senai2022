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
            result.forEach(e => {

                let aux = e.data
                let dataFormatada = ((aux.getDate())) + "/" + ((aux.getMonth() + 1)) + "/" + aux.getFullYear();
                e.data = dataFormatada
                console.log(e.data)

            });
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

module.exports = {
    listarProdutos
}