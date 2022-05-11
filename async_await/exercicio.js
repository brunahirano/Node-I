//exercício
/*
Crie um arquivo script.js, onde será criado uma função de soma que precisará
ter como resultado um número par. Para isso, você precisa criar uma promise
trazendo os callbacks de sucesso ou erro, onde o sucesso trará a mensagem
dizendo que a operação foi concluída e o número somado.
*/

function somResultPar(num1, num2) {
    return new Promise(function (resolve, reject) {
        let result = num1 + num2
        if (result % 2 === 0) {
            resolve("Operação concluída ", console.log(`O resultado da soma é:  ${result}`));
        } else {
            reject("O resultado da soma não é par, erro na operação");
        }
    })
}


async function executar(num1, num2) {
    try {
        const somaRecebida = await somResultPar(num1, num2);
        console.log(somaRecebida);
    }
    catch (error) {
        console.log(error);
    }
}

executar(1,1)
