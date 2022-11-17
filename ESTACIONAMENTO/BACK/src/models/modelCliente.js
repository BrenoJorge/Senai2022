//clientes
const vw_cliente = (model) => {
    return "SELECT * FROM clientes"
}

const add_cliente = ( model ) => {
    return `INSERT INTO clientes VALUES(default,"${model.nome}", "${model.telefone}", "${model.endereco}")`
}

const alterar_cliente = ( model ) => {
    return `update clientes set nome = '${model.nome}', telefone = "${model.telefone}", endereco = "${model.endereco}" where id = ${model.id}`
}

const deletar_cliente = ( model ) => {
    return `delete from clientes where id = ${model.id}`
}

const buscar_cliente = ( model ) => {
    return `select * from clientes where id = ${model.id}`
}

module.exports = {
    vw_cliente,
    add_cliente,
    alterar_cliente,
    deletar_cliente,
    buscar_cliente
}