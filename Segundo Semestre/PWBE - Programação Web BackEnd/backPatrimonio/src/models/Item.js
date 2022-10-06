const toRead = () => {
    return `SELECT * FROM vw_solicitacoes`;
}

const toProcedure = (dados) => {
    return `call solicita_um_item(${dados.n_sol},${dados.depto},${dados.func},${dados.prod},${dados.qtd},${dados.total})`;
}

module.exports = {
    toRead,
    toProcedure
}