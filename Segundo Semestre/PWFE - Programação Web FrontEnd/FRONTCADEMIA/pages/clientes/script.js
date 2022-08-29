var modelo = document.querySelector(".modelo")

fetch('http://localhost:5000/alunos')
    .then(response => response.json())
    .then((dados) => {

        dados.forEach((dado) => {
            let alunos = modelo.cloneNode(true)

            alunos.classList.remove('modelo')
            alunos.querySelector(".nome-aluno").innerHTML = dado.nome
            alunos.querySelector(".peso-aluno").innerHTML = dado.peso    
            alunos.querySelector(".nascimento-aluno").innerHTML = dado.nascimento    
            alunos.querySelector(".sexo-aluno").innerHTML = dado.sexo    

            document.querySelector('main').appendChild(alunos)
        })

    })