// //1
// var num = 10
// var num2 = 20
// var num3 =10

// function tipoTriangulo(n1, n2, n3) {
//     if( n1 == n2 && n3 == n1){
//         return "equilatero"
//     }else if( n1 != n2 && n3 != n1){
//         return "escaleno"
//     }else{
//         return "isosceles"
//     }
// }

// console.log(`execicio 1: ${tipoTriangulo(num, num2, num3)}`)

// //2
// var salarios = [3050, 1900, 950]

// function calculardesconto(n){
//     if(n >= 0 && n <= 1903.98){
//         return " 0 desconto"
//     }else if(n > 1903.98 && n <= 2826.65){
//         return ((n*7.5)/100) + " desconto"
//     }else if(n > 2826.65 && n <= 3751.05){
//         return ((n*15)/100) + " desconto"
//     }else if(n > 3751.05 && n <= 4664.68){
//         return ((n*22.5)/100) + " desconto"
//     }else if(n > 4664.68){
//         return ((n*27.5)/100) + " desconto"
//     }
// }

// salarios.forEach(salario => {
//     console.log(calculardesconto(salario));
// });

//3

var filhos = [3, 2, 5];
var salarios = [1200, 2500, 4400]

var salarioFamilia = () => {

    filhos.forEach((kids,indice) =>{
        console.log(indice)
        salarios[indice]
            if(salarios[indice] <= 1655){
                console.log("O salario familia é : " + kids*56.57)
            }else{
                console.log("Não tem direito ao salario familia")
            }
        })
}

console.log(salarioFamilia())

