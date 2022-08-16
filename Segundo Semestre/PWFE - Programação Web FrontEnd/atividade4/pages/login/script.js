
var form = document.querySelector("form")

form.addEventListener("submit", function (e) {

    e.preventDefault()

    let Usuario = document.querySelector("#Usuario").value
    let Inputsenha = document.querySelector("#senha").value
    let acessando = false

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((dados) => {
            let usuarios = dados

            usuarios.forEach(usuario => {
                if (usuario.email == Usuario && usuario.username == Inputsenha) {

                    acessando = true

                    let infoTexto = JSON.stringify({
                        "usuario" : usuario.name,
                        "id" : usuario.id
                    })

                    window.localStorage.setItem("userData", infoTexto)
                }

            })

            if (acessando) {
                window.location.href = "../rede_social/index.html"
            } else {
                alert("Usuario ou senha invalido")
            }

        })

})
