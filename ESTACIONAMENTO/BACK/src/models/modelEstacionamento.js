const add_entrada = (model) => {
    return `insert into entrada values(${model.id_cli}, "${model.placa_veiculo}", "${model.entrada}", "${model.saida}", ${model.valor});`
}

module.exports = add_entrada;
