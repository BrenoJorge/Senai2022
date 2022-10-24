const uri = 'http://localhost:3000/usuarios';
const card = document.querySelector('.card');
const cards = document.querySelector("#cards");
const cadastro = document.querySelector("#cadastro");
const alteracao = document.querySelector("#alteracao");
var avatarBase64 = null;
var usuarios = [];

const load = () => {
    const options = { method: 'GET' };
    fetch(uri + '/read', options)
        .then(resp => resp.json())
        .then(resp => {
            usuarios = resp
            readCards();
        })
        .catch(err => console.error(err));
}

cadastro.addEventListener('submit', (e) => {
e.preventDefault();
    const usuario = {
        login: cadastro.login.value,
        nome: cadastro.nome.value,
        nascimento: cadastro.nascimento.value,
        telefone: cadastro.telefone.value,
        avatar: avatarBase64
    }
    console.log(usuario)
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    };
    fetch(uri + '/create', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201)
                window.location.reload();
            else
                alert("Erro ao enviar dados para o servidor, erro: "+resp)
        })
        .catch(err => console.error(err));
});

const readCards = () => {
    let index = - 1;
    usuarios.forEach(e => {
        index++;
        let usuario = card.cloneNode(true);
        usuario.classList.remove("modal");
        usuario.querySelector("#login").innerHTML += e.login;
        usuario.querySelector("#nome").innerHTML += e.nome;
        let data = new Date(e.nascimento);
        usuario.querySelector("#nascimento").innerHTML += data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split(" ")[0];
        usuario.querySelector("#telefone").innerHTML += e.telefone;
        usuario.querySelector("#avatar").src = e.avatar == 'null' ? '../assets/default.png' : `data:image/png;base64,${e.avatar}`;
        usuario.querySelector("#update").setAttribute('onclick', `alterar('${index}')`);
        usuario.querySelector("#del").setAttribute('onclick', `excluir('${e.login}')`);
        cards.appendChild(usuario);
    });
}

const alterar = (i) => {
    alteracao.classList.remove('modal');
    alteracao.login.value = usuarios[i].login;
    alteracao.nome.value = usuarios[i].nome;
    alteracao.nascimento.value = usuarios[i].nascimento.split("T")[0];
    alteracao.telefone.value = usuarios[i].telefone;
    if(usuarios[i].avatar != 'null') avatarBase64 = usuarios[i].avatar;
    alteracao.imagem.src = usuarios[i].avatar == 'null' ? '../assets/default.png' : `data:image/png;base64,${avatarBase64}`;
}

alteracao.addEventListener('submit', () => {
    const usuario = {
        login: alteracao.login.value,
        nome: alteracao.nome.value,
        nascimento: alteracao.nascimento.value,
        telefone: alteracao.telefone.value,
        avatar: avatarBase64
    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    };
    fetch(uri + '/update', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 200)
                window.location.reload();
            else
                alert("Erro ao enviar dados para o servidor, erro: "+resp)
        })
        .catch(err => console.error(err));
});

const excluir = (login) => {
    if (confirm('Confirma a exclusão do login: ' + login + '?')) {
        const options = { method: 'DELETE' };
        fetch(uri + '/del/' + login, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 200)
                    window.location.reload();
            })
            .catch(err => console.error(err));
    }
}

// const toBase64create = () => {
//     let file = document.querySelector("#fileCreate")['files'][0];
//     let fr = new FileReader();
//     fr.onload = function () {
//         avatarBase64 = fr.result.replace("data:", "").replace(/^.+,/, "");
//         cadastro.imagem.src = `data:image/png;base64,${avatarBase64}`;
//     }
//     fr.readAsDataURL(file);
// }

const toBase64update = () => {
    let file = document.querySelector("#fileUpdate")['files'][0];
    let fr = new FileReader();
    fr.onload = function () {
        avatarBase64 = fr.result.replace("data:", "").replace(/^.+,/, "");
        alteracao.imagem.src = `data:image/png;base64,${avatarBase64}`;
    }
    fr.readAsDataURL(file);
}

const padrao = document.querySelector("#dz").querySelector("span").cloneNode(true)

function dropHandler(ev) {
  console.log('File(s) dropped');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  const dataTransfer = new DataTransfer();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === 'file') {
        const file = item.getAsFile();
        let fr = new FileReader();
        fr.onload = function () {
          avatarBase64 = fr.result.replace("data:", "").replace(/^.+,/, "");
          document.querySelector("#dz").querySelector("span").innerHTML = `<img id="imgCadastro" src="data:image/png;base64,${avatarBase64}" />`
          dataTransfer.items.add(file);
        }
        fr.readAsDataURL(file);
      }
    });
  } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(file);
      let fr = new FileReader();
      fr.onload = function () {
        avatarBase64 = fr.result.replace("data:", "").replace(/^.+,/, "");
        document.querySelector("#dz").querySelector("span").innerHTML = `<img id="imgCadastro" src="data:image/png;base64,${avatarBase64}" />`
        dataTransfer.items.add(file);
      }
      fr.readAsDataURL(file);

    });
  }

  document.querySelector("#inpFile").files = dataTransfer.files
  document.querySelector("#dz").classList.toggle("drop-zone-over")
  document.querySelector("#dz").classList.toggle("drop-zone-full")
}

function dragEnterHandler(ev) {
  console.log('File(s) in drop zone');
  document.querySelector("#dz").classList.toggle("drop-zone-over")
}

function dragLeaveHandler(ev) {
  document.querySelector("#dz").classList.toggle("drop-zone-over")
}

function dragOverHandler(ev) {
  ev.preventDefault();
}

function inpChange(e) {
  console.log(e.files)
  document.querySelector("#dz").classList.toggle("drop-zone-full")
  toBase64create()
}

const toBase64create = () => {
  let file = document.querySelector("#inpFile")['files'][0];
  let fr = new FileReader();
  fr.onload = function () {
    avatarBase64 = fr.result.replace("data:", "").replace(/^.+,/, "");
    document.querySelector("#dz").querySelector("span").innerHTML = `<img src="data:image/png;base64,${avatarBase64}" />`
  }
  fr.readAsDataURL(file);
}