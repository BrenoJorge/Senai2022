const con = require('../bd/bditems');

const listarItens = (req, res) => {
    let string = "select * from itens";
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}

module.exports = {
    listarItens
}