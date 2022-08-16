fetch('http://10.87.207.21:3001/ListarClientes')
.then(response => response.json())
.then((data) => {
    let dados = data
    let tabela = document.querySelector('.linha')

    dados.forEach(dado =>{
        let coluna = tabela.cloneNode(true)
        console.log(coluna)
        coluna.querySelector('.coluna1').innerHTML = dado.id_cliente
        coluna.querySelector('.coluna2').innerHTML = dado.pri_nome + " " + dado.sobrenome
        coluna.querySelector('.coluna3').innerHTML = dado.endereco

        document.querySelector("table").appendChild(coluna)
    })
})
