//clientes
const vw_cliente = (model) => {
    return "select * from vw_cliente"
}

const add_cliente = ( model ) => {
    return `call insere_dados("${model.nome}", "${model.cpf}", "${model.telefone}")`
}

const alterar_cliente = ( model ) => {
    return `update cliente set nome = '${model.nome}', cpf = ${model.cpf} where id_cli = ${model.id}`
}

const deletar_cliente = ( model ) => {
    return `delete from cliente where id_cli = ${model.id}`
}

const buscar_cliente = ( model ) => {
    return `select * from cliente where id_cli = ${model.id}`
}

module.exports = {
    vw_cliente,
    add_cliente,
    alterar_cliente,
    deletar_cliente,
    buscar_cliente
}