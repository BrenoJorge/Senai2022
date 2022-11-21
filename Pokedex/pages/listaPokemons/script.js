var cardPokemon = document.querySelector(".card-pokemon")

const cardContainer = document.getElementById("pokelist");

const cardLimit = 300;

const cardIncrease = 25;

const pageCount = Math.ceil(cardLimit / cardIncrease);

let currentPage = 1;

const firstLista = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=25'

var lista 

window.onload = function () {
    addCards(currentPage);
};

const addCards = (pageIndex) => {
    
    currentPage = pageIndex;
    const startRange = (pageIndex - 1) * cardIncrease;
    const endRange = pageIndex * cardIncrease;
    if (currentPage == 1) {
        fetch(firstLista)
        .then(response => response.json())
        .then(data => {
            lista = data
            lista.results.forEach((pokemon) => {
                fetch(pokemon.url)
                    .then(resp => resp.json())
                    .then(dados =>{
                        carregarPokemon(dados)
                    })          
            })
        })
    } else if (currentPage == 20) {
        removeInfiniteScroll()
    } else {
        fetch(lista.next)
        .then(response => response.json())
        .then(data => {
            lista = data
            lista.results.forEach((pokemon) => {
            
                fetch(pokemon.url)
                    .then(resp => resp.json())
                    .then(dados =>{
                        carregarPokemon(dados)
                    })                
            })
        })
    }
};

var throttleTimer;
 
const throttle = (callback, time) => {
  if (throttleTimer) return;
 
  throttleTimer = true;
 
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

const handleInfiniteScroll = () => {
    throttle(() => {
      const endOfPage =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
   
      if (endOfPage) {
        addCards(currentPage + 1);
      }
    }, 1000);
  };

  window.addEventListener("scroll", handleInfiniteScroll);

  const removeInfiniteScroll = () => {
    loader.remove();
    window.removeEventListener("scroll", handleInfiniteScroll);
  };

function carregarPokemon(data){
   
    let card = cardPokemon.cloneNode(true)
    card.classList.remove("model")
    
    card.addEventListener("click", ()=> {
        carregarInfo(data.name)
    })
    
    let nome = card.querySelector(".nome-pokemon")
    let tipo = card.querySelector(".tipo-pokemon")
    let img = card.querySelector(".img-pokemon")
            
            nome.innerHTML = data.name
                        
            
            img.innerHTML = `<img src="${data.sprites.front_default}" />`
            
            //styles
            
            //grass
            if(data.types[0].type.name == "grass"){
                card.classList.add("grass-div-background-color")
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="grass-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="grass-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //fire
            } else if(data.types[0].type.name == "fire"){
            card.classList.add("fire-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="fire-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="fire-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //electric
            } else if(data.types[0].type.name == "electric"){
            card.classList.add("eletric-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="eletric-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="eletric-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //water
            } else if(data.types[0].type.name == "water"){
            card.classList.add("water-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="water-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="water-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //normal
            } else if(data.types[0].type.name == "normal"){
            card.classList.add("normal-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="normal-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="normal-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //fighting
            } else if(data.types[0].type.name == "fighting"){
            card.classList.add("fighting-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="fighting-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="fighting-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //flying
            } else if(data.types[0].type.name == "flying"){
            card.classList.add("fly-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="fly-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="fly-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //poison
            } else if(data.types[0].type.name == "poison"){
            card.classList.add("poison-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="poison-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="poison-p-background-color">${data.types[0].type.name}</p>`
                 }
                
             //ground
            } else if(data.types[0].type.name == "ground"){
            card.classList.add("ground-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="ground-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="ground-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //rock
            } else if(data.types[0].type.name == "rock"){
            card.classList.add("rock-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="rock-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="rock-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //bug
            } else if(data.types[0].type.name == "bug"){
            card.classList.add("bug-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="bug-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="bug-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //ghost
            } else if(data.types[0].type.name == "ghost"){
            card.classList.add("ghost-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="ghost-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="ghost-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //steel
            } else if(data.types[0].type.name == "steel"){
            card.classList.add("steel-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="steel-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="steel-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //psychic
            } else if(data.types[0].type.name == "psychic"){
            card.classList.add("psych-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="psych-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="psych-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //dark
            } else if(data.types[0].type.name == "dark"){
            card.classList.add("dark-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="dark-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="dark-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //fairy
            } else if(data.types[0].type.name == "fairy"){
            card.classList.add("fairy-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="fairy-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="fairy-p-background-color">${data.types[0].type.name}</p>`
                 }
                 
             //dragon
            } else if(data.types[0].type.name == "dragon"){
            card.classList.add("dragon-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="dragon-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="dragon-p-background-color">${data.types[0].type.name}</p>`
                 }
                              
            } else {
                card.classList.add("normal-div-background-color")
            
                if(data.types.length > 1){
                    data.types.forEach((type) => {
                        tipo.innerHTML += `<p class="normal-p-background-color">${type.type.name}</p>`                    
                    })
                } else {
                    tipo.innerHTML += `<p class="normal-p-background-color">${data.types[0].type.name}</p>`
                 }
            }
                
                 document.querySelector("main").appendChild(card)
                 card = ""
}

//info

function carregarInfo(id){                
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(resp => resp.json())
        .then(dados => {
            if(dados.name != undefined)
                montarCardInfo(dados)
            
        })
        .catch(function(err){
              if(err == 'SyntaxError: Unexpected token N in JSON at position 0' || err == `SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON`) {
                  alert("errinho, poke nao encontrado")
              } else {
                  console.log(err)
              }
                           
          })
}

function montarCardInfo(dados){

let cardInfo = document.querySelector("#card-info")
showModelInfo()

let infoPoke = document.querySelector("#info-poke")

infoPoke.querySelector("h2").innerHTML = dados.name

dados.types.forEach(type => {
    infoPoke.querySelector("p").innerHTML += type.type.name + "  "
})

if(dados.sprites.front_default != null || dados.sprites.back_dafault != null){

    infoPoke.querySelector("#sprites").innerHTML += `<img src="${dados.sprites.front_default}">`
infoPoke.querySelector("#sprites").innerHTML += `<img src="${dados.sprites.back_default}">`
infoPoke.querySelector("#sprites").innerHTML += `<img src="${dados.sprites.front_shiny}">`
infoPoke.querySelector("#sprites").innerHTML += `<img src="${dados.sprites.back_shiny}">`
} else {
    infoPoke.querySelector("#sprites").innerHTML += "<h4>Sem imagem do pokémon na api, perdão</h4>"
}

dados.stats.forEach(stat => {
    
    infoPoke.querySelector("#stats").innerHTML += `<p>${stat.stat.name}</p>`    
    
    infoPoke.querySelector("#stats").innerHTML += `<progress value="${stat.base_stat}" max="100">${stat.stat.name}</progress>`
    
    infoPoke.querySelector("#stats").innerHTML += `<p class="stats-number">${stat.base_stat}/100</p>`
    
})

}

function showModelInfo(){
let card =  document.querySelector("#card-info")
card.classList.toggle("model")
card.querySelector("h2").innerHTML = ""
card.querySelector("p").innerHTML = ""
card.querySelector("#sprites").innerHTML = ""
card.querySelector("#stats").innerHTML = ""
}

function puxarPokemon(){
    let pokemon = document.querySelector("#pokemonBusca").value
    
    carregarInfo(pokemon)
    
}
