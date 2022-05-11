//Função encadeadas

const somarCom = (com) => (valor) => valor + com
const subtraiDe = (de) => (valor) => valor - de

async function teste () {
    const entrada = 11
    const saida = await Promise.resolve(entrada)
        .then(somarCom(10))
        .then(subtraiDe(7))

    console.log(">>>", saida)
}

teste()