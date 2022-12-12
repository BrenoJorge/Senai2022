var cardcomentario = document.querySelector(".card-comentario")
var userinfo = JSON.parse(localStorage.getItem("comentario"))

function carregarComentarios() {
    fetch("http://10.87.207.2:3000/avaliacoes/" + userinfo.id)
        .then(resp => resp.json())
        .then(comentarios => {
            if(comentarios.length != 0) {
                comentarios.forEach(comentario => {
                    let card = cardcomentario.cloneNode(true)
                    card.classList.remove("modal")
    
                    card.querySelector(".nota").innerHTML += comentario.nota
                    card.querySelector(".avaliacao").innerHTML += comentario.avaliacao
                    card.querySelector(".nome").innerHTML += comentario.nome
    
                    document.querySelector("body").appendChild(card)
                })
            } else {
                let card = cardcomentario.cloneNode(true)
                card.classList.remove("modal")
                card.innerHTML = "<h2>Sem Comentarios</h2>"
                document.querySelector("body").appendChild(card)
            }       
        })
}