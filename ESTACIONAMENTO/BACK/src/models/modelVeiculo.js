//veiculos
const listar_veiculo = ( model ) => {
    return `select * from veiculos`
}

const add_veiculo = ( model ) => {
    return `insert into veiculos value("${model.placa}", "${model.modelo}", "${model.descricao}", "${model.tipo}")`
}

const alterar_veiculo = ( model ) => {
    return `update veiculos set placa = '${model.placa}', modelo = '${model.modelo}', descricao = '${model.descricao}', tipo = '${model.tipo}' where placa = '${model.placa}'`
}

const deletar_veiculo = ( model ) => {
    return `delete from veiculos where placa = '${model.placa}'`
}

const buscar_veiculo = ( model ) => {
    return `select * from veiculos where placa = '${model.placa}'`
}

module.exports = {
    listar_veiculo,
    add_veiculo,
    alterar_veiculo,
    deletar_veiculo,
    buscar_veiculo
}