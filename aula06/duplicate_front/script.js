const modal = document.querySelector(".model");
var dadosClientes = {}

function carregarInfo(){
    fetch('http://localhost:3000/duplicatas/clientes')
    .then(response => response.json())
    .then((data) => {
        dadosClientes = data
        let dados = data
        let tabela = document.querySelector('.linha')

        dados.forEach(dado => {
            let coluna = tabela.cloneNode(true)
            coluna.querySelector('.coluna1').innerHTML = dado.cod_cli
            coluna.querySelector('.coluna2').innerHTML = dado.nome
            coluna.querySelector('.coluna3').innerHTML = `${dado.endereco}, ${dado.bairro}, ${dado.cidade}, ${dado.uf}`
            coluna.querySelector('.coluna4').innerHTML = `<button onclick="showModal(${dado.cod_cli})">Telefones</button>`

            dado.telefones.forEach((item) => {

                coluna.querySelector('.tel').innerHTML += `${item.tipo} : ${item.numero} ;`

            })

            document.querySelector("table").appendChild(coluna)
        })
    })

}

function showModal(id) {
    modal.classList.toggle("model")
    preencherTelefones(id)
}

function preencherTelefones(id){
        dadosClientes.forEach((dado) =>{
            if(dado.cod_cli == id) {
                document.querySelector('.tel').innerHTML = ""
                dado.telefones.forEach((tel) => {
                    document.querySelector('.tel').innerHTML += `${tel.tipo} : ${tel.numero} \n\r`
                })
            }
        
    })
}