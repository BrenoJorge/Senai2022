function carregar(){
    fetch('http://localhost:3000/clientes')
    .then(response => response.json())
    .then((dados) => {
        dados.forEach((dado) =>{
            let codigo = document.createElement('p')
            codigo.innerHTML = dado.codigo

            let nome = document.createElement('p')
            nome.innerHTML = dado.nome

            let endereco = document.createElement('p')
            endereco.innerHTML = dado.endereco

            let telefone = document.createElement('p')
            telefone.innerHTML = dado.telefone

            document.querySelector(".codigo").appendChild(codigo)
            document.querySelector(".nome").appendChild(nome)
            document.querySelector(".endereco").appendChild(endereco)
            document.querySelector(".telefone").appendChild(telefone)
        })
    })
}
