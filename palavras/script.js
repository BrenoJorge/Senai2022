function calcularFatorialRecursivamente(n) {
    if (n === 1) {
        return 1;
    }

    return n * calcularFatorialRecursivamente(n - 1);
}

function calcularFatorial(fatorial) {
    if (isNaN(fatorial)) {
        return 'Não existe fatorial de um texto';
    }

    if (!Number.isInteger(fatorial) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural';
    }

    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }

    return calcularFatorialRecursivamente(fatorial);
}

// Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}

let palavra = "sagaz"
let palavraArray = []
let arrayDePalavras = []

//palavra em array
for (let i = 0; i < palavra.length; i += 1) {
    palavraArray.push(`${palavra[i]}`)
}

//array em palavra
function arrayParaPalavra(arr) {
    let palavra = ""
    for (let i = 0; i < arr.length; i += 1) {
        palavra += arr[i]
    }
    return palavra
}


console.log(palavraArray)
console.log(arrayParaPalavra(palavraArray))
console.log(calcularFatorial(palavra.length));

let index = 0
while (index < calcularFatorial(palavra.length)) {
    let boolean = false
    let modelPalavra = arrayParaPalavra(shuffleArray(palavraArray))
    for (let i = 0; i < arrayDePalavras.length; i++) {
        if (arrayDePalavras[i] == modelPalavra) {
            boolean = true
        }
    }
    if (boolean == false) {
        arrayDePalavras.push(modelPalavra)
        index++
    }
}
console.log(arrayDePalavras)

let palavrasVerificadas = []

function verificar() {
    for (let i = 0; i < arrayDePalavras.length; i++) {
        fetch("https://significado.herokuapp.com/v2/" + arrayDePalavras[i])
            .then(response => response.status)
            .then(resp => {
                    if(resp != 400){
                        palavrasVerificadas.push(arrayDePalavras[i])
                    }
            })
    }
}

verificar()

console.log(arrayDePalavras)