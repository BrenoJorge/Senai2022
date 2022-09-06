const linhamodelo = document.querySelector(".linhamodelo")
const modeloexcluir = document.querySelector(".excluir")
const modeloeditar = document.querySelector(".editar")
const model = document.querySelector(".model")

fetch('http://localhost:4200/produtos')
    .then(response => response.json())
    .then(produtos => {
        produtos.forEach((produto) => {
            let linha = linhamodelo.cloneNode(true)
            linha.classList.remove('model')

            let colunas = linha.querySelectorAll("td")
            colunas[0].innerHTML = produto.cod
            colunas[1].innerHTML = produto.nome
            colunas[2].innerHTML = produto.qtd
            colunas[3].innerHTML = "R$" + produto.preco

            linha.querySelector("#excluir").addEventListener('click', () => {
                modeloexcluir.classList.remove("model")
                modeloexcluir.querySelector("#cod").innerHTML = produto.cod
            })

            linha.querySelector("#editar").addEventListener('click', () => {
                modeloeditar.classList.remove("model")
                modeloeditar.querySelector("#codigo").value = produto.cod
                modeloeditar.querySelector("#nome").value = produto.nome
                modeloeditar.querySelector("#quantidade").value = produto.qtd
                modeloeditar.querySelector("#valor").value = produto.preco
            })

            document.querySelector("tbody").appendChild(linha)

        })

    })

function fecharModalExcluir() {
    modeloexcluir.classList.add("model")
}

function fecharModalEditar() {
    modeloeditar.classList.add("model")
}

function editarProduto() {
    let produto = {
        "cod": modeloeditar.querySelector("#codigo").value,
        "nome": modeloeditar.querySelector("#nome").value,
        "qtd": parseInt(modeloeditar.querySelector("#quantidade").value),
        "preco": parseInt(modeloeditar.querySelector("#valor").value),
    }
    fetch('http://localhost:4200/produto', {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(produto)
    })
        .then(response => response.json())
        .then((resp) => {
            if (resp.cod !== undefined) {
                alert("Modificado com sucesso")
                window.location.reload()
            } else {
                alert("Falha ao salvar")
            }
        })

}

function excluirProduto(){
    let data = {
        "cod" : modeloexcluir.querySelector("#cod").innerHTML
    }
    console.log(data)
    fetch('http://localhost:4200/produto', {
        "method" : "DELETE",
        "headers": {
            "Content-Type" : "application/json"
        },
        "body": JSON.stringify(data)
    })
    .then(response => response.json())
    .then((resp) => {
        if(resp.cod !== undefined){
            alert("Excluido com secusso")
            window.location.reload()
        } else {
            alert("Falha ao excluir")
            window.location.reload()
        }
    })

}