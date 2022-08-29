var modelo = document.querySelector(".modelo")

fetch('http://localhost:5000/aparelhos')
    .then(response => response.json())
    .then((dados) => {

        dados.forEach((dado) => {
            let aparelhos = modelo.cloneNode(true)

            aparelhos.classList.remove('modelo')
            aparelhos.querySelector(".id-aparelho").innerHTML = dado.id_aparelho
            aparelhos.querySelector(".nome-aparelho").innerHTML = dado.aparelho  

            document.querySelector('main').appendChild(aparelhos)
        })

    })