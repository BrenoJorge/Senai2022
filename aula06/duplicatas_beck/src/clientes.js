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
    for (let i = 0; i < lista.length; i++) {

        for (let j = 0; j < lista.length; j++) {

            if (lista[i].cod_cli == lista[j].cod_cli && i != j) {

                    lista[j].telefones.forEach((tel) => {
                        lista[i].telefones.push(tel)
                    })

                    lista.splice(lista.indexOf(lista[j]), 1)
                    
                }
        }
    }

    return lista
}

module.exports = {
    clientes
}