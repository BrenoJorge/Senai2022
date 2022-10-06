//veiculos
const listar_veiculo = ( model ) => {
    return `select * from veiculos`
}

const add_veiculo = ( model ) => {
    return `insert into veiculos("${model.placa}", "${model.modelo}", "${model.descricao}")`
}

const alterar_veiculo = ( model ) => {
    return `update veiculos set placa = '${model.placa}', modelo = '${model.modelo}', descricao = '${model.descricao}' where placa = '${model.placa}'`
}

const deletar_Veiculo = ( model ) => {
    return `delete from veiculos where placa = '${model.placa}'`
}

const buscar_veiculo = ( model ) => {
    return `select * from veiculos where placa = '${model.placa}'`
}

module.exports = {
    listar_veiculo,
    add_veiculo,
    alterar_veiculo,
    deletar_Veiculo,
    buscar_veiculo
}