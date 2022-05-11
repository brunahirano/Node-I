function encomenda(bebida) {
    return new Promise(function (resolve, reject) {
        if (bebida === 'cafe') {
            resolve("Seu pedido está feito");
        } else {
            reject("Não podemos fazer o seu pedido");
        }
    });
}

function processandoPedido(pedido) {
    return new Promise(function (resolve) {
        console.log("O pedido está sendo processado pela maquininha do cartão");
        resolve(pedido);
    });
}

//promisse de encomenda
encomenda("cafe")
    .then(function (pedidoCliente) {
        console.log("Requisicao aceita");
        let pedidoProcessado = processandoPedido(pedidoCliente);
        return pedidoProcessado
    })
    .then(function (pedidoProcessado) {
        console.log(pedidoProcessado);
    })
    .catch(function (err) {
        console.log(err)
    });

encomenda("chá")
    .then(function (pedidoCliente) {
        console.log("Requisicao aceita");
        let pedidoProcessado = processandoPedido(pedidoCliente);
        return pedidoProcessado
    })
    .then(function (pedidoProcessado) {
        console.log(pedidoProcessado);
    })
    .catch(function (err) {
        console.log(err)
    });

