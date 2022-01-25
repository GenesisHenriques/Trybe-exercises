const express = require('express')
const color = require('random-hex-color')();

const app = express()
const PID = process.pid;
const port =  process.env.PORT || 3000;

app.get('/bug', () => {
  console.error('Aconteceu um bug');
  process.exit(1); // simulando um bug - força um processo a sair - vai renicialixar o meu processo
})

app.get('/', (req, res) => {
  console.log('Acabou de chamar o endpoint root');
  res.type('html'); // para o goolge entender o send como um html
  res.send(
    `<body style="background-color: ${ color };">
      <h1> Nossa aplicação está rodando no processo ${ PID } </h1>
    </body>`)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))