async function asyncAwait() {
    console.log("Knock, knock");

    await delay(1000);
    console.log("Who's there?");

    await delay(1000);
    console.log("async/await!");
}

//transformando em async/await

function encomenda(bebida) {
    return new Promise(function (resolve, reject) {
        if (bebida === 'cafe') {
            resolve("Seu pedido está feito");
        } else {
            reject("Não podemos fazer seu pedido");
        }
    })
}

function processandoPedido(pedido) {
    return new Promise(function (resolve) {
        console.log("O pedido está sendo processado pela maquininha do cartão");
        resolve(pedido);
    });
}


async function pedido() {
    try {
        const pedidoRecebido = await encomenda('cafe');
        console;log(pedidoRecebido);
        const pedidoProcessado = await processandoPedido(pedidoRecebido);
        console.log(pedidoProcessado);
    }
    catch (error) {
        console.log(error);
    }
}

pedido();