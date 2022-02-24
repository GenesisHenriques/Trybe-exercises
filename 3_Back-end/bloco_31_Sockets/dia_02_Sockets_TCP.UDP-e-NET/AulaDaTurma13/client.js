const net = require('net');
const stdin = process.openStdin();

// cria um novo socket
const client = new net.Socket();

client.connect(2708, '127.0.0.1', () => {
  stdin.addListener('data', (text) => { // pega a mensagem do terminal
    const message = text.toString().trim(); // trim - remove os espaços vazios

    client.write(message);
  });

});

client.on('data', (data) => {
  console.log('', data.toString());
});

client.on('close', () => {
  console.log('Você saiu da sala');
});