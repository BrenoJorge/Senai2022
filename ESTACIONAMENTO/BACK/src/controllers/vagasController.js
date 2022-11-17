const Vagas = require('../models/modelVagas.js');
const con = require('../models/estacionamentoDAO.js');

function listarVagas(req, res) {
    console.log(con)
    con.query(Vagas.listar_vagas(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

module.exports = {
    listarVagas
}
