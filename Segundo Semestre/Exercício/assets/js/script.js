var usuarios = [
    {
        "usuario": "brenolindo",
        "senha": 1234,
    },
    {
        "usuario": "NataMaromba",
        "senha": 1234,
    },
    {
        "usuario": "Rodolfo",
        "senha": 1234,
    },
    {
        "usuario": "Fernanda",
        "senha": 1234,
    }
]


var form = document.querySelector("form")

form.addEventListener("submit", function (e) {

    e.preventDefault()

    let Usuario = document.querySelector("#Usuario").value
    let Inputsenha = document.querySelector("#senha").value
    let acessando = false

    usuarios.forEach(usuario => {
        if (usuario.usuario == Usuario && usuario.senha == Inputsenha) {
            acessando = true
        }
    })

    if(acessando){
        window.location.href = "assets/loja/loja.html"
    }else{
        alert("Usuario ou senha invalido")
    }   
})
