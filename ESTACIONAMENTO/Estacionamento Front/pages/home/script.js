var cardVaga = document.querySelector(".card-vaga")
var modal = document.querySelectorAll(".model")
var placaInp = document.querySelector("#placa-car-add")
var vagaSelecionada = 0

function carregar() {

    for (let i = 0; i < 10; i++) {

        let cardClone = cardVaga.cloneNode(true)

        cardClone.classList.remove("model")

        cardClone.addEventListener("click", () => {
            abrirModel(i)
        })
        document.querySelector("main").appendChild(cardClone)

    }
}

function fecharAdd() {
    modal[1].classList.toggle("model")
}

function abrirModel(vaga) {
    modal[1].classList.toggle("model")
    vagaSelecionada = vaga + 1

}

function confirmAdd() {

    if (placaInp.value == "") {
        alert("Preencha os Campos")
    } else {
        event.preventDefault()
        let placa = document.querySelector("#placa-car-add").value
        let vagas = document.querySelectorAll(".card-vaga")
        vagas[vagaSelecionada].innerHTML += "<img src='../../assets/car.png'>"
        vagas[vagaSelecionada].querySelector("p").innerHTML = placa

        vagas[vagaSelecionada].style.color = "#b93632"
        vagas[vagaSelecionada].style.borderColor = "#b93632"
        vagas[vagaSelecionada].style.boxShadow = "1px 1px 10px -5px #b93632"

        document.querySelector("#placa-car-add").value = ""
        vagaSelecionada = 0

        fecharAdd()
    }
}
