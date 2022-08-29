var modelo = document.querySelector(".modelo")

fetch('http://localhost:5000/fichas')
    .then(response => response.json())
    .then((dados) => {

        dados.forEach((dado) => {
            let fichas = modelo.cloneNode(true)

            fichas.classList.remove('modelo')
            fichas.querySelector(".id_aluno").innerHTML = dado.id_aluno
            fichas.querySelector(".id_exercicio").innerHTML = dado.id_exercicio
            fichas.querySelector(".dia_semana").innerHTML = dado.dia_semana
            fichas.querySelector(".serie").innerHTML = dado.serie

            document.querySelector('main').appendChild(fichas)
        })

    })