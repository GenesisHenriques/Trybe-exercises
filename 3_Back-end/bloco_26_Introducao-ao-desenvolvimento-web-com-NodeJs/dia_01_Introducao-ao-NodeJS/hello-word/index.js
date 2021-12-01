const readline = require('readline-sync');

const firstName = readline.question('Qual o seu nome?');
const lastName = readline.question('Qual o seu sobrenome?');

console.log(`Hello, world! ${firstName} ${lastName}`);
