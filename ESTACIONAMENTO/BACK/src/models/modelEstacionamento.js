const listar_entrada = ( model ) => {
    return "SELECT * FROM vw_entradas"
}

const buscar_entrda = ( model ) => {
    return `SELECT * FROM vw_entradas where data_saida IS null AND vaga = '${model.id_vaga}'`;
}

const inserir_entrada = ( model ) => {
    return `INSERT INTO entradas VALUES(DEFAULT, ${model.id_cliente}, '${model.placa}', '${model.id_vaga}', curtime(), null, null)`;
}

const update_entrada = ( model ) => {
    return `UPDATE entradas SET data_saida = curtime(), valor = ${model.valor} where id_entrada = ${model.id}`;
}

const deletar_entrada = ( model ) => {
    return `DELETE FROM entradas WHERE id_entrada = ${model.id}`
}

module.exports = {
    listar_entrada,
    buscar_entrda,
    inserir_entrada,
    update_entrada,
    deletar_entrada
}