const produtos = document.querySelector(".produtos");
const produto = document.querySelector(".produto");
const modal = document.querySelector(".modal");
const modalB = document.querySelector(".modalB");

fetch('http://localhost:4200/produtos')
    .then(response => response.json())
    .then((dados) => {

        dados.forEach(dado => {
            duplicarProduto(dado)
        })

    })

function duplicarProduto(info) {

    let nProd = produto.cloneNode(true);
    nProd.classList.remove("model")

    nProd.querySelector('.nome').innerHTML = info.nome;
    nProd.querySelector('.preco').innerHTML = "R$" + info.preco;

    produtos.appendChild(nProd)
}

function cadastrar() {
    let cod = document.querySelector("#cod").value
    let nome = document.querySelector("#nome").value
    let qtd = document.querySelector("#qtd").value
    let preco = document.querySelector("#preco").value

    let data = {
        "cod": cod,
        "nome": nome,
        "qtd": qtd,
        "preco": preco
    }

    fetch('http://localhost:4200/inserir', {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },

        "body": JSON.stringify(data)
    })
        .then(response => response.json())
        .then((data) => {
            duplicarProduto(data)
            showModal()
        })
}

function buscar() {
     let cod = document.getElementById('codd').value
    fetch(`http://localhost:4200/buscar/${cod}`)
    .then(response => response.json())
    .then((data) => {
        document.getElementById('codd').value = data[0].cod
        document.getElementById('nomee').value = data[0].nome
        document.getElementById('qtdd').value = data[0].qtd
        document.getElementById('precoo').value = data[0].preco
    })

}

function showModal() {
    modal.classList.toggle("model")
}

function showModalB() {
    modalB.classList.toggle("model")
}