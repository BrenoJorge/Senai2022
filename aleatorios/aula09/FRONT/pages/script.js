const cardItem = document.querySelector('.card-item');
const modal = document.querySelectorAll('.model')


function carregar() {
    fetch("http://localhost:4000/patrimonio/itens")
        .then(response => response.json())
        .then((dados) => {
            dados.forEach((dado) => {

                let card = cardItem.cloneNode(true)
                card.classList.remove("model")
                card.querySelector(".ni").innerHTML += dado.ni
                card.querySelector(".dataA").innerHTML += formatarData(dado.aquisicao)
                card.querySelector(".denominacao").innerHTML += dado.denominacao
                card.querySelector(".valor").innerHTML += dado.valor
                card.querySelector("img").src += dado.img
                card.innerHTML += `<button onclick="excluir(${dado.ni})">DELETAR</button>`
                document.querySelector("main").appendChild(card)
            })
        })
}

function formatarData(dataAtual) {
    let data = new Date(dataAtual),
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}

function showModal() {
    modal[1].classList.toggle("model")
}

function excluir(ni) {
    const options = {
        method: "DELETE"
    }
    if (confirm("Deseja deletar o patrimonio com o numero de NI :" + ni)) {
        fetch(`http://localhost:4000/patrimonio/itens/${ni}`, options)
            .then(response => response.status)
            .then((resp) => {
                if(resp == 204){
                    alert("SUCESSO")
                    window.location.reload()
                }
            })
    }
}