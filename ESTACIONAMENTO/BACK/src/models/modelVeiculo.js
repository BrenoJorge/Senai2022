//veiculos
const listar_veiculo = ( model ) => {
    return `select * from veiculo`
}

const add_veiculo = ( model ) => {
    return `insert into veiculo value("${model.placa}", "${model.modelo}", "${model.descricao}")`
}

const alterar_veiculo = ( model ) => {
    return `update veiculo set placa = '${model.placa}', modelo = '${model.modelo}', descricao = '${model.descricao}' where placa = '${model.placa}'`
}

const deletar_veiculo = ( model ) => {
    return `delete from veiculo where placa = '${model.placa}'`
}

const buscar_veiculo = ( model ) => {
    return `select * from veiculo where placa = '${model.placa}'`
}

module.exports = {
    listar_veiculo,
    add_veiculo,
    alterar_veiculo,
    deletar_veiculo,
    buscar_veiculo
}