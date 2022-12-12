const user = document.querySelector("#user");
const psw = document.querySelector("#psw");

function login() {
    let info = {
        "nome": user.value,
        "senha": psw.value
    }

    fetch("http://10.87.207.2:3000/login", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(info)
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            if (data.length != []){
                localStorage.setItem("info", JSON.stringify({
                    "id": data[0].id,
                    "tipo": data[0].tipo
                }));
                window.location.href = "../salgados/";
            }
        })
}