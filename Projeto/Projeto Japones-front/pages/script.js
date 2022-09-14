const modal = document.querySelector('.modal')
const date = new Date()
var saldo = 0
var datasFiltro = []
var dadosLocal

function carregar() {
    fetch('http://localhost:3000/produtos')
        .then(response => response.json())
        .then((dados) => {

            let booleanCorC = true
            let booleanCorD = true
            dadosLocal = dados

            dados.forEach((dado) => {

                let aux = new Date(dado.data)
                let dataFormatada = ((aux.getDate())) + "/" + ((aux.getMonth() + 1)) + "/" + aux.getFullYear();
                dado.data = dataFormatada

                datasFiltro.push(dataFormatada)
                datasFiltro = datasFiltro.filter((ele, pos) => {
                    return datasFiltro.indexOf(ele) == pos;
                })

                let lLancamento = document.createElement('p')
                let lData = document.createElement('p')
                let lDescribe = document.createElement('p')
                let lValor = document.createElement('p')
                let lTipo = document.createElement('p')

                if (dado.tipo == "D") {


                    lLancamento.innerHTML = dado.n_lancamento
                    document.getElementById('dado-lancamento-debito').appendChild(lLancamento)


                    lData.innerHTML = dado.data
                    document.getElementById('dados-data-debito').appendChild(lData)


                    lDescribe.innerHTML = dado.descricao
                    document.getElementById('dados-descricao-debito').appendChild(lDescribe)


                    lValor.innerHTML = dado.valor
                    document.getElementById('dados-valor-debito').appendChild(lValor)


                    lTipo.innerHTML = "Saida"
                    document.getElementById('dados-lancamento-debito').appendChild(lTipo)

                    saldo = saldo - parseFloat(dado.valor)

                    if (booleanCorD) {
                        lLancamento.style.background = "#DFE7FF"
                        lData.style.background = "#DFE7FF"
                        lDescribe.style.background = "#DFE7FF"
                        lValor.style.background = "#DFE7FF"
                        lTipo.style.background = "#DFE7FF"

                        booleanCorD = false
                    } else {
                        booleanCorD = true
                    }

                } else if (dado.tipo == "C") {


                    lLancamento.innerHTML = dado.n_lancamento
                    document.getElementById('dado-lancamento-credito').appendChild(lLancamento)


                    lData.innerHTML = dado.data
                    document.getElementById('dados-data-credito').appendChild(lData)


                    lDescribe.innerHTML = dado.descricao
                    document.getElementById('dados-descricao-credito').appendChild(lDescribe)


                    lValor.innerHTML = dado.valor
                    document.getElementById('dados-valor-credito').appendChild(lValor)


                    lTipo.innerHTML = "Entrada"
                    document.getElementById('dados-lancamento-credito').appendChild(lTipo)

                    saldo = saldo + parseFloat(dado.valor)

                    if (booleanCorC) {
                        lLancamento.style.background = "#DFE7FF"
                        lData.style.background = "#DFE7FF"
                        lDescribe.style.background = "#DFE7FF"
                        lValor.style.background = "#DFE7FF"
                        lTipo.style.background = "#DFE7FF"

                        booleanCorC = false
                    } else {
                        booleanCorC = true
                    }

                }


            })


            document.getElementById('saldo').innerHTML = `Saldo acumulado : R$ ${saldo}`

            datasFiltro.forEach((datas) => {
                document.getElementById('filtro').innerHTML += `<option>${datas}</option>`
            })
        })
}

function filtrar(e) {

    saldo = 0
    let booleanCorC = true
    let booleanCorD = true

    document.getElementById('dado-lancamento-debito').innerHTML = ""
    document.getElementById('dados-data-debito').innerHTML = ""
    document.getElementById('dados-descricao-debito').innerHTML = ""
    document.getElementById('dados-valor-debito').innerHTML = ""
    document.getElementById('dados-lancamento-debito').innerHTML = ""

    document.getElementById('dado-lancamento-credito').innerHTML = ""
    document.getElementById('dados-data-credito').innerHTML = ""
    document.getElementById('dados-descricao-credito').innerHTML = ""
    document.getElementById('dados-valor-credito').innerHTML = ""
    document.getElementById('dados-lancamento-credito').innerHTML = ""

    dadosLocal.forEach((dado) => {
        if (dado.data == e) {

            if (dado.tipo == "D") {

                let lLancamento = document.createElement('p')
                lLancamento.innerHTML = dado.n_lancamento
                document.getElementById('dado-lancamento-debito').appendChild(lLancamento)

                let lData = document.createElement('p')
                lData.innerHTML = dado.data
                document.getElementById('dados-data-debito').appendChild(lData)

                let lDescribe = document.createElement('p')
                lDescribe.innerHTML = dado.descricao
                document.getElementById('dados-descricao-debito').appendChild(lDescribe)

                let lValor = document.createElement('p')
                lValor.innerHTML = dado.valor
                document.getElementById('dados-valor-debito').appendChild(lValor)

                let lTipo = document.createElement('p')
                lTipo.innerHTML = "Saida"
                document.getElementById('dados-lancamento-debito').appendChild(lTipo)

                saldo = saldo - parseFloat(dado.valor)

                if (booleanCorD) {
                    lLancamento.style.background = "#DFE7FF"
                    lData.style.background = "#DFE7FF"
                    lDescribe.style.background = "#DFE7FF"
                    lValor.style.background = "#DFE7FF"
                    lTipo.style.background = "#DFE7FF"

                    booleanCorD = false
                } else {
                    booleanCorD = true
                }


            } else if (dado.tipo == "C") {

                let lLancamento = document.createElement('p')
                lLancamento.innerHTML = dado.n_lancamento
                document.getElementById('dado-lancamento-credito').appendChild(lLancamento)

                let lData = document.createElement('p')
                lData.innerHTML = dado.data
                document.getElementById('dados-data-credito').appendChild(lData)

                let lDescribe = document.createElement('p')
                lDescribe.innerHTML = dado.descricao
                document.getElementById('dados-descricao-credito').appendChild(lDescribe)

                let lValor = document.createElement('p')
                lValor.innerHTML = dado.valor
                document.getElementById('dados-valor-credito').appendChild(lValor)

                let lTipo = document.createElement('p')
                lTipo.innerHTML = "Entrada"
                document.getElementById('dados-lancamento-credito').appendChild(lTipo)

                saldo = saldo + parseFloat(dado.valor)

                if (booleanCorC) {
                    lLancamento.style.background = "#DFE7FF"
                    lData.style.background = "#DFE7FF"
                    lDescribe.style.background = "#DFE7FF"
                    lValor.style.background = "#DFE7FF"
                    lTipo.style.background = "#DFE7FF"

                    booleanCorC = false
                } else {
                    booleanCorC = true
                }


            }

        }
    })

    document.getElementById('saldo').innerHTML = `Saldo acumulado : R$ ${saldo}`
}

function showModal() {
    modal.classList.toggle("modal")
}

function cadastrar() {
    let descri = document.querySelector("#descricaoC").value
    let valor = document.querySelector("#valorC").value
    let tipo = document.getElementById('tipoC').value

    if (tipo == "Entrada") {
        tipo = "C"
    } else {
        tipo = "D"
    }

    let data = `"${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}"`

    let dado = {
        "data": data,
        "descricao": descri,
        "valor": valor,
        "tipo": tipo
    }

    fetch('http://localhost:3000/produtos', {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(dado)

    })
        .then(response => response.json())
        .then(dado => {
            if (dado.data != null) {
                alert('item cadastrado!')
                window.location.reload()
            } else {
                alert('item não cadastrado!')
            }
        })
}
