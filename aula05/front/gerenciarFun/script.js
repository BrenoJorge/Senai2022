const ListaFuncionarios = document.querySelector("#lista-funcionarios")
const linhamodelo = document.querySelector(".linhamodelo");
const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");

const inputId = document.querySelector("#id");
const inputMatricula = document.querySelector("#matricula");
const inputNome = document.querySelector("#nome");
const inputCargo = document.querySelector("#cargo");
const inputSalario = document.querySelector("#salario");
const inputCpf = document.querySelector("#cpf");

const btCadedit = document.querySelector("#cadedit");

fetch("http://localhost:3000/funcionarios")
    .then(res => { return res.json() })
    .then(funcionarios => {
        funcionarios.forEach(funcionario => {
            let linha = linhamodelo.cloneNode(true);
            linha.classList.remove("model");

            let colunas = linha.querySelectorAll("td");
            colunas[0].innerHTML = funcionario.matricula
            colunas[1].innerHTML = funcionario.nome;
            colunas[2].innerHTML = funcionario.cargo;
            colunas[3].innerHTML = "R$ " + funcionario.salario;
            colunas[4].innerHTML = funcionario.cpf;

            linha.querySelector("#exclui").addEventListener("click", () => {
                modalExcluir.classList.remove("model");
                modalExcluir.querySelector("#cod").innerHTML = funcionario.matricula;
            })

            linha.querySelector("#edita").addEventListener("click", () => {
                modalEditar.classList.remove("model");
                btCadedit.innerHTML = "Editar";
                btCadedit.onclick = () => { editarfuncionario() }
                inputId.value =  funcionario.id;
                inputMatricula.value = funcionario.matricula;
                inputNome.value = funcionario.nome;
                inputCargo.value = funcionario.cargo;
                inputSalario.value = funcionario.salario;
                inputCpf.value = funcionario.cpf;
            })

            ListaFuncionarios.appendChild(linha);
        });
    });

function fecharModalExcluir() {
    modalExcluir.classList.add("model");
}

function fecharModalEditar() {
    modalEditar.classList.add("model");
}

function abrirModalCadastro() {
    btCadedit.innerHTML = "Cadastrar";
    btCadedit.onclick = () => { cadastrarfuncionario(); }
    inputMatricula.value = "";
    inputNome.value = "";
    inputCargo.value = "";
    inputSalario.value = "";
    inputCpf.value = "";
    modalEditar.classList.remove("model");
}

function editarfuncionario() {
    let funcionario = {
        "id": inputId.value,
        "matricula" : inputMatricula.value,
        "nome": inputNome.value,
        "cargo" : inputCargo.value,
        "salario": inputSalario.value,
        "cpf": inputCpf.value,
    }

    console.log(JSON.stringify(funcionario));
    fetch("http://localhost:3000/funcionarios", {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(funcionario)
    })
        .then(res => { return res.json() })
        .then(resp => {
            if (resp.id !== undefined) {
                alert("funcionario Alterado com Sucesso !");
                window.location.reload();
            } else {
                alert("Falha ao salvar alterações !");
            }
        })
}

function excluirfuncionario() {
    let data = {
        "matricula": document.querySelector("#cod").innerHTML
    }

    fetch("http://localhost:3000/funcionario", {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })
        .then(res => { return res.json() })
        .then(resp => {
            if (resp.matricula !== undefined) {
                alert("funcionario Excluido Com Sucesso!");
                window.location.reload();
            } else {
                alert("Falha ao excluir funcionario !");
            }
        });
}

function cadastrarfuncionario() {
    let funcionario = {
        "matricula" : inputMatricula.value,
        "nome": inputNome.value,
        "cargo" : inputCargo.value,
        "salario": parseInt(inputSalario.value),
        "cpf": inputCpf.value,
    };

    console.log(funcionario);

    fetch("http://localhost:3000/funcionario", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(funcionario)
    })
        .then(res => { return res.json() })
        .then(resp => {
            if (resp.matricula !== undefined) {
                alert("funcionario Cadastrado Com Sucesso !");
                window.location.reload();
            } else {
                alert("Falha ao cadastrar funcionario");
            }
        })
}

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

inputCpf.addEventListener('keyup', ()=>{
    if(validaCPF(inputCpf.value)){
        inputCpf.style.borderColor = "green"
    } else {
        inputCpf.style.borderColor = "red"
    }
})