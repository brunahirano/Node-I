///Closure(fechamento)
//Funções que lembram

// function geradorInc(incremento){
//     function incrementador(valor) {
//         return valor + incremento
//     }
//     return incrementador
// }

//arrow function do exemplo acima
const geradorInc = (incremento) => (valor) => valor + incremento


const incPor2 = geradorInc(2)
const valor = incPor2(4)
console.log('incPor2(4) == ', valor)