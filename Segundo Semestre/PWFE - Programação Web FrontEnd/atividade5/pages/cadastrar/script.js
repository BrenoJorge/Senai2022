var cep = document.getElementById('CEP')
var form = document.querySelector('form')
var senha = document.getElementById('senha')
var rSenha = document.getElementById('rSenha')

var dadosCep = false
var dadosSenha = false

form.addEventListener('submit', (e) => {

    e.preventDefault()

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let complemento = document.getElementById('complemento').value
    let rua = document.getElementById('Rua').value
    let bairro = document.getElementById('Bairro').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value

    if (dadosCep && dadosSenha) {
        window.localStorage.setItem("userData", JSON.stringify({
            "nome": nome,
            "email": email,
            "senha": senha.value,
            "telefone": telefone,
            "endereco": {
                "cep": cep.value,
                "complemento": complemento,
                "rua": rua,
                "bairro": bairro,
                "cidade": cidade,
                "estado": estado
            }
        }))
    }else if(dadosSenha == false) {
        document.querySelector("#mensagem").innerHTML = "Senha incorreta"
    }else if(dadosCep == false) {
        document.querySelector("#mensagem").innerHTML = "Cep incorreta"
    }


})

cep.addEventListener('keyup', () => {
    let inputCep = cep.value

    if (inputCep.length == 8) {
        fetch(`https://viacep.com.br/ws/${inputCep}/json/`)
            .then(response => response.json())
            .then((dados) => {

                if (dados.erro) {
                    cep.style.borderColor = "red"
                    document.getElementById('Rua').value = ''
                    document.getElementById('Bairro').value = ''
                    document.getElementById('cidade').value = ''
                    document.getElementById('estado').value = ''
                    dadosCep = false
                } else {
                    cep.style.borderColor = ""
                    document.getElementById('Rua').value = dados.logradouro
                    document.getElementById('Bairro').value = dados.bairro
                    document.getElementById('cidade').value = dados.localidade
                    document.getElementById('estado').value = dados.uf
                    dadosCep = true
                }

            })
    }

    cep.style.borderColor = "red"
})

senha.addEventListener('keyup',() => {valida()})
rSenha.addEventListener('keyup', () => {valida()})

function valida() {
    if (senha.value == rSenha.value) {
        dadosSenha = true
    } else {
        dadosSenha = false
    }
}