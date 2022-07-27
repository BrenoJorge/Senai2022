// var texto = document.getElementsByTagName("h1")

// //console.log(texto)

// var titulo = document.getElementById("titulo")

// //console.log(titulo)

// var aluno = {
//     nome: "fulano",
//     matricula: 247230
// }

// titulo.innerHTML = `Nome : ${aluno.nome} <br> matricula : ${aluno.matricula}`

// titulo.style.color = "green"
// titulo.style.margin = "50px"

// var mensagem = document.getElementById("mensagem")

// mensagem.style.display = "block"

// var divisao = document.getElementsByClassName("divisao")

// var titulo2 = document.querySelector("#titulo")
// var div = document.querySelectorAll(".divisao")
// var msg = document.querySelector("h1")

var busca = document.querySelector("#buscar")
var linhas = document.querySelectorAll("tr")
var btnBusca =document.querySelector("button")

btnBusca.addEventListener("click", buscarNome)
busca.addEventListener("keyup", buscarNome)

function buscarNome() {

    let encontrei = false

    linhas.forEach((linha) => {
        
        console.log(busca)
        
        let temp = linha.querySelector("td")

        if (temp != null) {
            // if (temp.innerHTML.toLowerCase() == busca.value.toLowerCase()) {
            //     encontrei = true
            //     linha.style.fontWeight = "bold"
            //     linha.style.color ="red"
            // }
            // if(temp.innerHTML.toLowerCase().includes(busca.value.toLowerCase())){
            //     linha.style.display = "table-row"
            // }else{
            //     linha.style.display = "none"
            // }

            if(linha.innerHTML.toLowerCase().includes(busca.value.toLowerCase())){
                linha.style.display = "table-row"
            }else {
                linha.style.display = "none"
            }

        }
        
    })

    //if(!encontrei) alert("nao encontrei")
}