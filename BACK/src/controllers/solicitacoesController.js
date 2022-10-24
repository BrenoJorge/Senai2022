const Item = require('../models/modelSolicitacao');
const con = require('../models/solicitacoesDAO');

const listarProdutos = (req, res) => {
    con.query(Item.listar_produtos(), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    });
}

const alterarProduto = (req, res) => {
    con.query(Item.alterar_produto(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    });
}

const addProduto = (req, res) => {
    con.query(Item.add_produto(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const addDepartamento = (req, res) => {
    con.query(Item.add_departamento(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const listarDepartamentos = (req, res) => {
    con.query(Item.listar_departamentos(), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    })
}

const deletarDepartamento = (req, res) => {
    con.query(Item.deletar_departamento(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const solicitacao = (req, res) => {
    con.query(Item.solicitacao(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const vwSol = (req, res) => {
    con.query(Item.vw_sol(), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    });
}

const buscarProdutoDepartamento = (req, res) => {
    con.query(Item.buscar_produto_departamento(req.params), (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const buscarProdutoMes = (req, res) => {
    con.query(Item.buscar_produto_mes(req.params), (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const solicitacoesFuncionario = (req, res) => {
    con.query(Item.solicitacoes_funcionario(), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    });
}

module.exports = {
    listarProdutos,
    addProduto,
    addDepartamento,
    deletarDepartamento,
    solicitacao,
    vwSol,
    buscarProdutoDepartamento,
    buscarProdutoMes,
    solicitacoesFuncionario,
    alterarProduto,
    listarDepartamentos
}