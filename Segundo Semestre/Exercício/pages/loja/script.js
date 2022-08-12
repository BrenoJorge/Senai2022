var produtos = [
    {
        "img" : "../../assets/img/eevee.png",
        "nome" : "Eevee Pelúcia Original Pokémon",
        "preco" : "R$114,00"
    },
    {
        "img" : "../../assets/img/bolsapikachu.jpg",
        "nome" : "Pikachu Evento Pelúcia Original Pokémon",
        "preco" : "R$159,90"
    },
    {
        "img" : "../../assets/img/gatinho.jpg",
        "nome" : "Gatinho Pelúcia Original Pokémon",
        "preco" : "R$99,90"
    },
    {
        "img" : "../../assets/img/gatao.jpg",
        "nome" : "Gatao Pelúcia Original Pokémon",
        "preco" : "R$199,90"
    },
    {
        "img" : "../../assets/img/eeveeA.jpg",
        "nome" : "Eevee Água Pelúcia Original Pokémon",
        "preco" : "R$59,90"
    },
    {
        "img" : "../../assets/img/etzinho.jpeg",
        "nome" : "Etzinho Pelúcia Lendário",
        "preco" : "INDISPONÍVEL"
    }
]

function carregar(){

    produtos.forEach(produto => {
        let novoItem = document.querySelector(".card").cloneNode(true)
    
        novoItem.classList.remove("modelo")
        
        novoItem.querySelector("#NomeProduto").innerHTML = produto.nome
        novoItem.querySelector("#PrecoProduto").innerHTML = produto.preco

novoItem.querySelector("#ImgProduto").src = produto.img

    if(produto.preco == "INDISPONÍVEL"){
        novoItem.querySelector("#comprar").remove()    
    }
        
        document.querySelector("main").appendChild(novoItem)

    })   
}