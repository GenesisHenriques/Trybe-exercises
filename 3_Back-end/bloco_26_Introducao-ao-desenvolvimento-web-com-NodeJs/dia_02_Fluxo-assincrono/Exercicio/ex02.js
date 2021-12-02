const funcMain = require('./ex01');

funcMain(2,1,0)
.then(result => console.log(`Resultado: ${result}`))
.cath(err => console.log(`err.message`));