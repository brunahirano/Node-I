//Criar um programa para cálculo de comissão
//-a comissão de todos é 10% do total de vendas 
//na Comissão de um supervisor, acrescentamos 5% ao valor da comissão
//-na comissão do gerente acescentamos 10% ao valor da comissão

function calcularComissaoGeral(percentual) {
    percentual = percentual
    function calcularReal(valorVenda) {
        return valorVenda * percentual
    }
    return calcularReal
}

function geradorCalculadorComissao(tipoVendedor) {
    return (tipoVendedor === 'vendedor') ? 
    calcularComissaoGeral(0.1) : 
    (tipoVendedor === 'supervisor') ? 
    calcularComissaoGeral(0.15) : 
    calcularComissaoGeral(0.20)
}

function executar() {
    const tipoVendedor = 'vendedor'
    const valorVenda = 1000
    const calcularComissao = geradorCalculadorComissao(tipoVendedor)
    const valorDaComissao = calcularComissao(valorVenda)
    console.log('Valor da comissão:', valorDaComissao)
}
executar()


