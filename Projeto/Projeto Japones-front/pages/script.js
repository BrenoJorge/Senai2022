function carregar() {
    fetch('http://localhost:3000/produtos')
        .then(response => response.json())
        .then((dados) => {
            dados.forEach((dado) => {

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
                    lTipo.innerHTML = dado.tipo
                    document.getElementById('dados-lancamento-debito').appendChild(lTipo)

                } else if(dado.tipo == "C"){

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
                    lTipo.innerHTML = dado.tipo
                    document.getElementById('dados-lancamento-credito').appendChild(lTipo)

                }
            })
        })
}