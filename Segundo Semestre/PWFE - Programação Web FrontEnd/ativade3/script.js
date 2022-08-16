fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then((dado) => {
    
    console.log(dado)
    let datas = dado
    
    let tabela = document.querySelector('.modelo')

    datas.forEach((data) => {

        let coluna = tabela.cloneNode(true)
        let check = coluna.querySelector('input')

        check.addEventListener('click', (e) => {
            if(e.target.checked){
                coluna.style.color="green"
                coluna.style.borderColor="green"
            } else {
                coluna.style.color="red"
                coluna.style.borderColor="red"
            }
        })

        coluna.classList.remove('modelo')
        coluna.querySelector('.Userid').innerHTML = data.userId
        coluna.querySelector('.id').innerHTML = data.id
        coluna.querySelector('.title').innerHTML = data.title

        if(data.completed){
            check.checked = 'true'
        }

        if(check.checked){
            coluna.style.color ="green"
            coluna.style.borderColor ="green"
        } else {
            coluna.style.color ="red"
            coluna.style.borderColor ="red"
        }

        document.querySelector("body").appendChild(coluna)
    })
})
