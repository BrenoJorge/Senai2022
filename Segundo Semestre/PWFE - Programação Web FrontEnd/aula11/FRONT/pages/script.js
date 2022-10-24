const cardItem = document.querySelector('.card-item');
const modal = document.querySelectorAll('.model')
const submit = document.querySelector("#cadastrar")

submit.addEventListener('click', () => {
    cadastrar()
})

function carregar() {
    fetch("https://patrimoniomongo.herokuapp.com/read/")
        .then(response => response.json())
        .then((dados) => {
            dados.items.forEach((dado) => {

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

function cadastrar() {
    let ni = document.getElementById("ni").value
    let aquisicao = document.getElementById("aquisicao").value
    let denominacao = document.getElementById("denominacao").value
    let valor = document.getElementById("valor").value
    let img = document.getElementById("img").value

    let item = {
        "ni": parseFloat(ni),
        "aquisicao": aquisicao,
        "denominacao": denominacao,
        "valor": parseFloat(valor),
        "img": img
    }

    fetch("https://patrimoniomongo.herokuapp.com/create", {
        "method": "POST",
        "headers": { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    })
        .then((res) => res.status)
        .then((resp) => {
            if (resp == 201) {
                alert("item cadastrado com sucesso")
                window.location.reload()
            } else {
                alert("item NÃO cadastrado")
            }
        })
}

function excluir(ni) {
    const options = {
        method: "DELETE"
    }
    if (confirm("Deseja deletar o patrimonio com o numero de NI :" + ni)) {
        fetch(`https://patrimoniomongo.herokuapp.com/del/ni/${ni}`, options)
            .then(response => response.status)
            .then((resp) => {
                if (resp == 200) {
                    alert("SUCESSO")
                    window.location.reload()
                }
            })
    }
}