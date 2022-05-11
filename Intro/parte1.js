function exemploFazAlgoRespondeDepois(tempo, funcaoResposta) {
    const x = 1 + tempo
    console.log(1, 'Vou chamar o setTimeout')
    setTimeout(() => funcaoResposta(x), 5000)
    setTimeout(() =>{
        console.log('Abortei')
        process.exit(1)
    }, 2000)
    console.log(2, 'Chamei setTimeout')

    Promisse.all()
}

function teste() {
    console.log('oi')
    exemploFazAlgoRespondeDepois(3, functionApresentarResposta)
    console.log('Continua')
}

function functionApresentarResposta(resposta) {
    console.log('>>>>>>', repsosta)
}

teste()
console.log('Saiu do programa')