function somar(x,y) {
    return x + y
}

function subtrair(x,y) {
    return x - y
}

//função geradoras, funções que retornam funções
function calcularPorOperador(operador) {
    if(operador === '+'){
        return somar
    }
    if(operador === '-'){
        return subtrair
    }
}

function testar() {
    const operador = '-'
    const calcular = calcularPorOperador(operador)
    const resultado = calcular(3,2)
    console.log("Resultado:", resultado)
}

testar()