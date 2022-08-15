var carinho = [
    {
        "img": "https://w7.pngwing.com/pngs/841/856/png-transparent-air-jordan-shoe-sneakers-amazon-com-nike-michael-jordan-white-outdoor-shoe-sneakers-thumbnail.png",
        "nome": "Jordão",
        "qts": 2
    },
    {
        "img": "https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dw05aa76bc/product-images/4001280_0031_HAVAIANAS%20TRADICIONAL_C.png?sw=680&sh=680",
        "nome": "Chinelao",
        "qts": 1
    },
    {
        "img": "https://http2.mlstatic.com/D_NQ_NP_694924-MLB46542533629_062021-W.jpg",
        "nome": "Bermuda pumao",
        "qts": 1
    },
    {
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/342/362/products/camisa-1101-4f010a6f5b3adeb82a16154154713550-1024-1024.png",
        "nome": "Camisa lala",
        "qts": 5
    },
    {
        "img": "https://w7.pngwing.com/pngs/211/11/png-transparent-oakley-inc-sunglasses-juliet-ray-ban-sunglasses-orange-sporting-goods-metal.png",
        "nome": "juju",
        "qts": 10
    }
]

var itemCarinho = document.querySelector(".modelo-carinho")

function carregar(){

    carinho.forEach(item => {
        let novoItem = itemCarinho.cloneNode(true)
        console.log(novoItem)
        novoItem.classList.remove("modelo")

        novoItem.querySelector("#img-item").src = item.img
        novoItem.querySelector("#nome-item").innerHTML = item.nome
        novoItem.querySelector("#qtd").value = item.qts

        document.querySelector(".carrinho").appendChild(novoItem)
       
    })
}

function remover(element){
    element.parentNode.remove()
}