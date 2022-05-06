//Escreva um módulo e use-o em outro arquivo
const User = require('./User.js');

const bruna = new User('Bruna', 31, 'bruna@example.com');

console.log(bruna.printUser());