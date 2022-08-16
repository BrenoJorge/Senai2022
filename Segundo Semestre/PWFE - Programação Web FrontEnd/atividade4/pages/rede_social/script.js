let info = window.localStorage.getItem("userData")
let objUser = JSON.parse(info)

var publi = document.querySelector(".post")

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${objUser.id}`)
    .then(response => response.json())
    .then((posts) => {
        posts.forEach((post) => {
            let pub = publi.cloneNode(true)
            pub.classList.remove("model")

            document.querySelector("#name").innerHTML = objUser.usuario
            pub.querySelector(".title").innerHTML = post.title

            document.querySelector('main').appendChild(pub)

        })

        objUser = ''
        window.localStorage.setItem("userData", JSON.stringify(objUser))
    })