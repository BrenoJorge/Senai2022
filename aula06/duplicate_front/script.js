fetch('http://localhost:3000/duplicatas/clientes')
    .then(response => response.json())
    .then((data) => {
        let dados = data
        let tabela = document.querySelector('.linha')

        dados.forEach(dado => {
            let coluna = tabela.cloneNode(true)
            console.log(coluna)
            coluna.querySelector('.coluna1').innerHTML = dado.cod_cli
            coluna.querySelector('.coluna2').innerHTML = dado.nome
            coluna.querySelector('.coluna3').innerHTML = `${dado.endereco}, ${dado.bairro}, ${dado.cidade}, ${dado.uf}`

            for(let i = 0; i < dado.telefones.length ; i++) {
                // coluna.creatElement('.tel').innerHTML += dado.telefones[i].tipo

                let linhaa = document.createElement('p')             
                linhaa.innerHTML += dado.telefones[i].tipo
                console.log(linhaa)

                coluna.querySelector('.telefones').appendChild(linhaa)
            }                        

            document.querySelector("table").appendChild(coluna)
        })
    })

const modal = document.querySelector(".model");

function showModal() {
    modal.classList.toggle("model")
}

function preencher(item) {
    console.log(item)
}