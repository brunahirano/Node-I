//Funções encadeadas
//Pipeline / sequência de funções encadeadas
//Saída de uma função é a entrada de outra função

const somarCom = (com) => (valor) => valor + com
const subtraiDe = (de) => (valor) => valor - de

ehPar = (valor) => valor % 2 === 0

teste01 = () => {
    const entrada= 11
    let saida
    if(ehPar(entrada)) {
        const somarCom3 = somarCom(3)
        saida = somarCom3(entrada)
    }else {
        const subtraiDe3 = subtraiDe(3)
        saida = subtraiDe3(entrada)
    }
    console.log('>', saida)
}

//Transformar em pipeline
const validar = (funcaoValidacao) => (entrada) => ({
    entao: (funcaoEntao) => ({
        senao: (funcaoSenao) => {
            funcaoValidacao(entrada) ?
            funcaoEntao(entrada) :
            funcaoSenao(entrada)
        }
    })
})

teste02 = () => {
    const validarEhPar= validar(ehPar)
    const entrada = 11
    const saida = validarEhPar(entrada)
    .entao(somarCom(3))
    .senao(subtraiDe(3))
   
    console.log('>', saida)
}

teste01()

//teste02()