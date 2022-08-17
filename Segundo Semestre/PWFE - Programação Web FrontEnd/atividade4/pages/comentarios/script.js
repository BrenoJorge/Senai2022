var url = new URL(window.location.href)
var params = new URLSearchParams(url.search)

console.log(params.get('id'))

var listComentarios = document.querySelector(".comentarios")
var itemComentario = document.querySelector(".comentario")

fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then((comentarios) => {

})