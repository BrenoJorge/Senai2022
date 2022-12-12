const username = document.querySelector("#username");

const itemlista = document.querySelector(".item-lista");
const lista = document.querySelector(".lista");

var userinfo = JSON.parse(localStorage.getItem("info"))

username.innerHTML = userinfo.id;

fetch("http://10.87.207.2:3000/salgados")
    .then(resp => {
        return resp.json()
    })
    .then(dados => {
        dados.forEach(data => {
            let item = itemlista.cloneNode(true);

            item.classList.remove("model");

            item.querySelector("img").src = "../../assets/" + data.foto;
            item.querySelector("#id").innerHTML = data.id;
            item.querySelector("#descricao").innerHTML = data.descricao;
            item.querySelector("#nome").innerHTML = data.nome;

            item.querySelector("span").addEventListener("click", () => {
                remover(data.id, item);
            })

            item.querySelector("#comentario").addEventListener("click", () => {
                carregarComentarios(data.id)
            })

            lista.appendChild(item);
        })
    })

function carregarComentarios(id) {
    localStorage.setItem("comentario", JSON.stringify({
        "id": id
    }));
    window.location.href = "../comentarios";
}

function remover(id, item) {
    if (userinfo.tipo == 1) {
        fetch("http://10.87.207.2:3000/salgado/" + id, {
                "method": "DELETE"
            })
            .then(resp => {
                return resp.status
            })
            .then(data => {
                if (data == 204) {
                    alert("Item excluido com sucesso!!!")
                    window.location.reload()
                }
            });
    } else {
        alert("Voce nao tem esse tipo de acesso")
    }
}

function modalCad() {
    if (userinfo.tipo == 1) {
        document.querySelector(".mc").classList.toggle("model");
    } else {
        alert("Voce nao tem esse tipo de acesso")
    }
}

function modalSucesso() {
    document.querySelector(".ms").classList.toggle("model");
}

function cadastrar() {
    let nome = document.querySelector(".nome").value
    let descricao = document.querySelector(".descricao").value
    let foto = document.querySelector(".img").value

    if (nome == "" || descricao == "" || foto == "") {
        alert("Preencha todos os campos!")
    } else {
        let dado = {
            "nome": nome,
            "descricao": descricao,
            "foto": foto
        }

        fetch("http://10.87.207.2:3000/salgado", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(dado)
            })
            .then(resp => {
                return resp.status;
            })
            .then(data => {
                if (data === 200) {
                    modalCad();
                    modalSucesso();
                    setTimeout(() => {
                        modalSucesso()
                        window.location.reload()
                    }, 2000);
                }
            })
    }

}