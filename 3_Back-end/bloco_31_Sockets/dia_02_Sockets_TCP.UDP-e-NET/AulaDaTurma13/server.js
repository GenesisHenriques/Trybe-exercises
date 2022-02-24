const net = require('net');

const port = 2708;

// Preciso saber quem são as pessoas conectadas (sockets)
const sockets = [];

// nickname
let guestId = 0;

const server = net.createServer((socket) => { // socket = quem está conectando
  guestId ++;
  socket.guest = 'Guest' + guestId; // Adiciona um guest(nome) no socket com o vavlor de 'guest' + guestId

  // .emit = enviar
  socket.emit('Boas vindas'); // envia uma mensagem para quem acabou de se conectar

  sockets.push(socket);
  // console.log('aaaaa', socket);

  disparo(socket.guest, `${socket.guest} acabou de se conectar`);

  // .on = escutar
  socket.on('end', () => { //ouvindo o evento end - desconectar
    socket.splice(sockets.indexOf(socket), 1); // remove o proprio cliente
    const message = socket.guest + 'deixou o chat';

    disparo(socket.guest, message); // Avisa para todo mundo quem saiu
  });

  //criando eventos personalizados------------
  socket.on('data', (data) => {
    // console.log(data, 'dataaaaa');
    const message = socket.guest + ': ' + data.toString(); // pega a mensagem que o client envia

    disparo(socket.guest, message);
  });
});

const disparo = (from, message) => {
  sockets.forEach((socket) => {
    // quero validar se não vou enviar a mensagem para quem acabou de se connectar
    if (socket.guest === from) return;

    socket.write(message); // avisa para todos quem saiu
  });
};

server.listen(port, () => {
  console.log('Servidor tá ON');
});