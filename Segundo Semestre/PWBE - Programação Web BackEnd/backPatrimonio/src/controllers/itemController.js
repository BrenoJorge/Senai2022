const Item = require('../models/Item');
const con = require('../models/solicitacoesDAO');

const listarView = (req, res) => {
    con.query(Item.toRead(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const solicitarItem = (req, res) => {
    con.query(Item.toProcedure(req.body), (err, result) => {
        if (err == null)
            if (result[1].affectedRows != 0)
                res.json(result).end();
            else
                res.status(400).json(result).end()
        else
            res.status(400).end();
    });
}


module.exports = {
    listarView,
    solicitarItem
}