var submitValidarVeiculo = document.querySelector("#submitValidarVeiculo")
var inputPlcaVeiculo = document.querySelector("#inputPlcaVeiculo")
var RespostaValidarVeiculo = document.querySelector("#RespostaValidarVeiculo")

submitValidarVeiculo.addEventListener("click", () => {
    if (inputPlcaVeiculo.value != "") {
        let resposta = validarPlaca(inputPlcaVeiculo.value)
        RespostaValidarVeiculo.innerHTML = resposta
    } else {
        RespostaValidarVeiculo.innerHTML = "Campo vazio"
    }

})

var submitValidarCpf = document.querySelector("#submitValidarCpf")
var inputCpf = document.querySelector("#inputCpf")
var RespostaValidarCpf = document.querySelector("#RespostaValidarCpf")

submitValidarCpf.addEventListener("click", () => {

    if (validaCPF(inputCpf.value)) {
        RespostaValidarCpf.innerHTML = "Cpf verdadeiro"
    } else if (inputCpf.value == "") {
        RespostaValidarCpf.innerHTML = "Preenche antes de validar"
    } else {
        RespostaValidarCpf.innerHTML = "cpf falso"
    }

})

var submitGerarTelefone = document.querySelector("#submitGerarTelefone")
var inputDDD = document.querySelector("#inputDDD")
var inputQuantidade = document.querySelector("#inputQuantidade")
var RespostaGerador = document.querySelector("#RespostaGerador")

submitGerarTelefone.addEventListener("click", ()=> {
    let telefones = gerarTelefones(inputDDD.value, inputQuantidade.value)
    RespostaGerador.innerHTML = ""
    telefones.forEach(function(telefone){
        RespostaGerador.innerHTML += `${telefone}<br>`      
    })
})

var inputQuantidadeCpf = document.querySelector("#inputQuantidadeCpf")
var submitGerarCpf = document.querySelector("#submitGerarCpf")
var RespostaGeradorCpf = document.querySelector("#RespostaGeradorCpf")

submitGerarCpf .addEventListener("click", () => {
    let cpfs = gerarCPF(inputQuantidadeCpf.value)
    RespostaGeradorCpf.innerHTML = ""
    cpfs.forEach(function(cpf){
        RespostaGeradorCpf.innerHTML += `${cpf}<br>`
    })
})

function validarPlaca(placa) {
    if (placa.length == 7) {
        if (isNaN(placa[0]) && isNaN(placa[1]) && isNaN(placa[2])) {
            if (isNaN(placa[3]) == false && (isNaN(placa[4]) == false || isNaN(placa[4]) == true) && isNaN(placa[5]) == false && isNaN(placa[6]) == false) {
                return "placa valida"
            } else {
                return "placa invalida"
            }
        } else {
            return "placa invalida"
        }
    } else {
        return "Placa Inválida por Exceder/Falta de Caracteres"
    }
}
//validarPlaca("ABC1212")

// authors:
// @Batista29
// @Vicafe04
// @BrenoJorge
// @c-alvares

function validaCPF(cpf) {

    let mult
    let soma = 0
    let indice = 0
    let resto

    //primeira conta
    if (cpf.length == 11) {
        for (let i = 10; i >= 2; i--) {
            mult = i * cpf[indice]
            soma += mult
            indice++
        }
        resto = (soma * 10) % 11

        if (resto == 10 || resto == 11) {
            resto = 0
        }
        if (resto != cpf[9]) {
            //console.log("Cpf invalido")
            return false
        } else {
            //segunda conta
            indice = 0
            soma = 0
            for (let i = 11; i >= 2; i--) {
                mult = i * cpf[indice]
                soma += mult
                indice++
            }
            resto = (soma * 10) % 11
            if (resto == cpf[10]) {
                //console.log("Cpf valido")
                return true
            } else {
                //console.log("Cpf invalido")
                return false
            }
        }
    } else {
        return false
        //console.log("tamanho do cpf excedido")
    }

}

//validaCPF("")

// authors:
// @Batista29
// @Vicafe04
// @BrenoJorge
// @c-alvares

function gerarTelefones(ddd, quantidade) {

    let telefones = []
    for (let i = quantidade; i > 0; i--) {
        let phone = `${ddd}-${Math.floor(Math.random() * (99999 - 11111 + 1)) + 11111}-${Math.floor(Math.random() * (9999 - 1111 + 1)) + 1111}`
        telefones.push(phone)
    }
    return telefones
}

//gerarTelefones(11,3)



function gerarCPF(quantidade) {
    let indice = 0
    var cpfs = []

    while (indice != quantidade) {
        let cpfGerado = Math.floor(Math.random() * (99999999999 - 00000000000 + 1) + 00000000000).toString()
        if (validaCPF(cpfGerado)) {
            cpfs.push(cpfGerado)
            indice++
        }
    }

    return cpfs

}
//gerarCPF(10)

