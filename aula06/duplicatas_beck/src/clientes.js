const clientes = (lista) => {
    lista.forEach(item => {

        //criando o campo telefone
        item.telefones = []

        //criando o sub lista telefone
        let tel = {}

        tel.tipo = item.tipo
        tel.numero = item.telefone

        item.telefones.push(tel)

        delete item.tipo
        delete item.telefone

    })

    //remover duplicados
    for (let i = 1; i < lista.length; i++) {
        if (lista[i].cod_cli == lista[i - 1].cod_cli) {

            lista[i - 1].telefones.forEach((tel) => {
                lista[i].telefones.push(tel)
            })
            lista.splice(lista.indexOf(lista[i - 1]), 1)

        }
    }

    for (let i = 1; i < lista.length; i++) {
        if (lista[i].cod_cli == lista[i - 1].cod_cli) {

            lista[i - 1].telefones.forEach((tel) => {
                lista[i].telefones.push(tel)
            })
            lista.splice(lista.indexOf(lista[i - 1]), 1)

        }
    }


    return lista
}

module.exports = {
    clientes
}