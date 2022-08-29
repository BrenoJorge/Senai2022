var modelo = document.querySelector(".modelo")

fetch('http://localhost:5000/exercicios')
    .then(response => response.json())
    .then((dados) => {

        dados.forEach((dado) => {
            let exercicios = modelo.cloneNode(true)

            exercicios.classList.remove('modelo')
            exercicios.querySelector(".id-exercicio").innerHTML = dado.id_exercicio
            exercicios.querySelector(".descricao_exercicio").innerHTML = dado.descricao_exercicio 
            exercicios.querySelector(".grupo_muscular").innerHTML = dado.grupo_muscular
            exercicios.querySelector(".id_aparelho").innerHTML = dado.id_aparelho

            document.querySelector('main').appendChild(exercicios)
        })

    })